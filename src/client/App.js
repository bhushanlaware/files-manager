import { Button, Container, CssBaseline } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Home as HomeIcon } from "@material-ui/icons";
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
import RedBlue from "./Themes/RedBlue";

function App() {
  const [darkMode, setDarkMode] = useState(false);
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

  const updateServiceWorker = () => {
    waitingWorker && waitingWorker.postMessage({ type: "SKIP_WAITING" });
    window.location.reload();
  };

  const refreshAction = () => {
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

  const onServiceWorkerUpdate = (registration) => {
    setWaitingWorker(registration && registration.waiting);
    enqueueSnackbar("A new version is available", {
      persist: true,
      variant: "success",
      action: refreshAction(),
    });
  };

  useEffect(() => {
    serviceWorker.register({ onUpdate: onServiceWorkerUpdate });
  }, []);

  useEffect(() => {
    const dmode = localStorage.getItem("darkMode");
    setDarkMode(dmode === "true");
  }, []);

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
  ];

  const getComopnent = (C) => <C menu={menu.map(x => ({ ...x, component: null }))}></C>;

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
