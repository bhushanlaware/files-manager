import { Button, Container, CssBaseline } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { useSnackbar } from "notistack";
import React, { Fragment, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route, Switch
} from "react-router-dom";
import AppBar from "./Components/AppBar";
import Home from "./Containers/Home";
import * as serviceWorker from "./serviceWorker";
import BluePink from "./Themes/BluePink";
import CyonYellow from "./Themes/CyonYellow";
import RedBlue from "./Themes/RedBlue";
import VehicleActivity from "./Containers/VehicleActivity";
import PlaceInteractions from "./Containers/PlaceInteractions";
import { DirectionsCar, Home as HomeIcon, LocationOnSharp } from "@material-ui/icons";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [newVersionAvailable, setNewVersionAvailable] = useState(false);
  const [waitingWorker, setWaitingWorker] = useState({});
  const { enqueueSnackbar } = useSnackbar();

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: darkMode ? "dark" : "light",
          ...RedBlue,
        },
      }),
    [darkMode]
  );

  const onServiceWorkerUpdate = (registration) => {
    console.log("onServiceWorkerUpdate");
    setNewVersionAvailable(true);
    setWaitingWorker(registration && registration.waiting);
    if (newVersionAvailable)
      //show snackbar with refresh button
      enqueueSnackbar("A new version is avaible", {
        persist: true,
        variant: "success",
        action: refreshAction(),
      });
  };

  const updateServiceWorker = () => {
    console.log("updateServiceWorker");
    waitingWorker && waitingWorker.postMessage({ type: "SKIP_WAITING" });
    setNewVersionAvailable(false);
    window.location.reload();
  };

  const refreshAction = (key) => {
    //render the snackbar button
    return (
      <Fragment>
        <Button
          className="snackbar-button"
          size="small"
          onClick={updateServiceWorker}
        >
          {"refresh"}
        </Button>
      </Fragment>
    );
  };
  useEffect(() => {
    console.log("Regstering..");
    serviceWorker.register({ onUpdate: onServiceWorkerUpdate });
  }, []);

  useEffect(() => {
    let dmode = localStorage.getItem("darkMode");

    // if (dmode == undefined) {
    //   dmode = false;
    //   localStorage.setItem("darkMode", dmode);
    // }
    dmode === "false" ? setDarkMode(false) : setDarkMode(true);
  }, []);

  // useEffect(() => {
  //   window["isUpdateAvailable"].then((isAvailable) => {
  //     if (isAvailable) {
  //       window.location.href = "/";
  //     }
  //   });
  // }, []);
  const changeTheme = () => {
    localStorage.setItem("darkMode", !darkMode);
    setDarkMode(!darkMode);
  };
  const menu = [
    {
      title: 'Home',
      url: '/',
      icon: <HomeIcon />,
      component: Home,
    },
    {
      title: 'Place Interactions',
      url: '/place-interactions',
      icon: <LocationOnSharp />,
      component: PlaceInteractions,
    },
    {
      title: 'Vehicle Activity',
      url: '/vehicle-activity',
      icon: <DirectionsCar />,
      component: VehicleActivity,
    }
  ]
  const getComopnent = (C) => <C menu={menu.map(x => ({ ...x, component: null }))}></C>
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar title={"My Tracker"} changeTheme={changeTheme} isDark={darkMode}></AppBar>
      <Container style={{ marginTop: "10px" }}>
        <Router>
          <Switch>
            {menu.map(x =>
              <Route path={x.url} exact render={() => getComopnent(x.component)} ></Route>
            )}
            <Redirect from='*' to='/'></Redirect>
          </Switch>
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;
