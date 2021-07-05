import {
  Box,
  Container,
  Grid, Typography
} from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import React from "react";
import { useHistory } from "react-router";
import bannerImg from "../../assets/banner.jpeg";
import enjoy from "../../assets/enjoy.png";
import SearchBar from "../../Components/SearchBar";

const useStyles = makeStyles((theme) =>
  createStyles({
    bannerDiv: {
      position: "relative",
    },
    banner: {
      height: "100vh",
      width: "100%",
      opacity: "75%",
      overflow: "hidden",
    },
    bannerTitle: {
      position: "absolute",
      top: "30vh",
      width: "100%",
    },
    text: {
      color: "#ffffff",
    },
    subText: {
      color: "#ffffff",
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: "#fff",
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("md")]: {
        //   marginLeft: theme.spacing(57),
        width: "50%",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
      width: "75%",
      [theme.breakpoints.up("sm")]: {
        width: "85%",
      },
    },
    inputInput: {
      padding: theme.spacing(2, 1, 2, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
        padding: theme.spacing(3, 1, 3, 6),
        fontSize: "1.25rem",
      },
      fontSize: "1rem",
    },
    bodyText: {
      alignSelf: "center",
    },
  })
);

const HomeContent = (props) => {
  const classes = useStyles();

  const history = useHistory();

  const handleSearch = (searchVal) => {
    history.push({
      pathname: "/movies",
      query: searchVal,
    });
  };

  return (
    <>
      <Container disableGutters maxWidth={false}>
        <Box bgcolor="#05122a">
          <img src={bannerImg} alt="img" className={classes.banner} />
          <Box className={classes.bannerTitle} px={4}>
            <Typography variant="h2" align="center" className={classes.text}>
              Watch unlimited movies on single click!!
            </Typography>
            <Box mt={2} mb={4}>
              <Typography
                variant="h5"
                align="center"
                className={classes.subText}
              >
                Ready to watch? Search now with movie title to get started.
              </Typography>
            </Box>
            <SearchBar search={(val) => handleSearch(val)} />
          </Box>
        </Box>
      </Container>
      <Box pt={3} bgcolor="gray" />
      <Box bgcolor="#05122a">
        <Grid container>
          <Grid item xs={12} md={6} className={classes.bodyText} align="center">
            <Box px={4} pt={4}>
              <Typography variant="h3" className={classes.text}>
                Enjoy our unlimited collection of latest movies.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={enjoy} alt="enjoy" width="100%" />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default HomeContent;
