import { Button } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import React from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      justifyContent: "space-between",
    },
    title: {
      fontWeight: "bold",
      fontStyle: "italic",
    },
    loginBtn: {
      fontWeight: "bold",
    },
  })
);

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const AppHeader = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const goToHome =()=>{
    history.push({
      pathname: "/"
    })
  }

  return (
    <>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar className={classes.root}>
            <Button color="secondary" size="large" className={classes.title} onClick={goToHome}>
              <Typography variant="h3">Zedify</Typography>
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  );
};

export default AppHeader;
