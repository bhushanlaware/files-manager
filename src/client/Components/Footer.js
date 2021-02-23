import { Grid } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Copyright © "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
function Support() {
  return (
    <Typography variant="subtitle2">
     My Cars
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(1, 1),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
  center: {
    textAlign: "center",
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container>
        <Grid container>
          <Grid item xs={12} className={classes.center}>
            <Support />
          </Grid>
          <Grid item xs={12} className={classes.center}>
            <Copyright />
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}
