import { Tooltip } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import DarkIcon from "@material-ui/icons/Brightness4";
import LightIcon from "@material-ui/icons/Brightness7";
import React from "react";
import InstallPWA from "./InstallPWA";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logoimg: {
    // backgroundColor: theme.palette.background.default,
    // borderRadius:'1'
  },
  AppBar: {
    background: theme.palette.background.default,
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();
  const [openInfo, setOpenInfo] = React.useState(false);

  const handleClickOpen = () => {
    setOpenInfo(true);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {props.title}
          </Typography>

          <Tooltip title="Change Theme">
            <IconButton color="inherit" onClick={props.changeTheme}>
              {!props.isDark ? <DarkIcon></DarkIcon> : <LightIcon></LightIcon>}
            </IconButton>
          </Tooltip>
          <InstallPWA></InstallPWA>
        </Toolbar>
      </AppBar>
    </div>
  );
}
