import { Box, Button, InputBase } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import React, { useRef } from "react";

const useStyles = makeStyles((theme) =>
  createStyles({
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: "#fff",
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("md")]: {
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
  })
);

const SearchBar = (props) => {
  const classes = useStyles();
  const inputRef = useRef(null);

  const handleSearch = () => {
    const searchVal = inputRef.current.value;
    props.search(searchVal);
  };

  return (
    <Box align="center">
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          inputRef={inputRef}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
        />
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={handleSearch}
        >
          Go
        </Button>
      </div>
    </Box>
  );
};

export default SearchBar;
