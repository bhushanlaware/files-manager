import { Box, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Home as HomeIcon } from "@material-ui/icons";
import React from "react";
import { Link } from 'react-router-dom';
import PageHeader from "../Components/PageHeader";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    display: "flex",
    flexDirection: "column",
    // minHeight: "100vh",
  },
}));

const ShowMenu = ({ menu }) =>
  <Grid container spacing={3} >
    {menu.map(x =>
      <Grid item>
        <Link to={x.url}>
          <Paper elevation={1} className="menuBox">
            <Box p={4}>
              <Typography variant='h5'>{x.icon} {x.title}</Typography>
            </Box>
          </Paper>
        </Link>
      </Grid>
    )}
  </Grid>
const Home = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <PageHeader title='Home' icon={<HomeIcon></HomeIcon>}></PageHeader>
      <Box p={3}>
        <ShowMenu menu={props.menu.filter(x => x.url !== '/')} />
      </Box>
    </div>
  );
};

export default Home;
