import { CircularProgress, Box } from "@material-ui/core";
import axios from "axios";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import PosterList from "./PosterList";
import useTheme from "./../../Components/CustomTheme";
import listingBannerImg from "../../assets/listingBanner.jpg";
import SearchBar from "../../Components/SearchBar";
import { useHistory } from "react-router-dom";
import { Typography } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  paginationItem: {
    backgroundColor: "#ffffff",
    fontSize: "22px",
    borderRadius: "10px"
  },
});

const ListingPage = (props) => {
  const theme = useTheme();
  const history = useHistory();
  const classes = useStyles();

  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  const [error, setError] = useState(false);
  const [title, setTitle] = useState("");
  const [totalPages, setTotalPages] = useState(10);

  const [page, setPage] = React.useState(1);
  const url = useMemo(() => process.env.REACT_APP_defaultUrl, []);
  const apiKey = useMemo(() => process.env.REACT_APP_API_KEY, []);

  const searchByTitle = useCallback(
    (movieTitle) => {
      setTitle(movieTitle);
      axios
        .get(
          `${url}?s=${movieTitle}&type="movie"&apikey=${apiKey}&page=${page}`
        )
        .then((res) => {
          if (res.data.Response === "True") {
            setList(res.data.Search);
            setTotalPages(res.data.totalResults);
            setLoading(false);
          } else {
            setError(true);
          }
        })
        .catch((error) => {
          console.log("err", error);
          setError(true);
        });
    },
    [apiKey, page, url]
  );

  const handleChange = (event, value) => {
    setPage(value);
    setLoading(true);
    setError(false);
    searchByTitle(title);
  };

  const handleSearch = useCallback(
    (searchVal) => {
      setTitle(searchVal);
      setLoading(true);
      setError(false);
      searchByTitle(searchVal);
    },
    [searchByTitle]
  );

  useEffect(() => {
    const searchVal = history.location.query ? history.location.query : null;
    if (searchVal) {
      searchByTitle(searchVal);
    } else {
      searchByTitle("New");
    }
  }, [history.location.query, searchByTitle]);

  return (
    <Box
      style={{
        position: "absolute",
        top: theme.mixins.toolbar.minHeight,
        backgroundImage: `url(${listingBannerImg})`,
      }}
      p={5}
      minHeight="95vh"
      width="100%"
    >
      <Box pt={14} mb={18}>
        <SearchBar search={(val) => handleSearch(val)} />
      </Box>
      {loading && (
        <Box minHeight="50vh">
          <CircularProgress color="secondary" style={{ fontSize: "32px" }} />
        </Box>
      )}
      {!loading && !error && <PosterList list={list} />}
      {error && (
        <Typography variant="h3" color="secondary" align="center">
          No Data found, try again with different title
        </Typography>
      )}
      <Box display="flex" mt={5} justifyContent="center" alignItems="center">
        <Pagination
          count={parseInt(totalPages/10)}
          page={page}
          color="secondary"
          onChange={handleChange}
          size="large"
          classes={{
            ul: classes.paginationItem,
          }}
        />
      </Box>
    </Box>
  );
};

export default ListingPage;
