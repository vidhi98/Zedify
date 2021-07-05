import { Box, CircularProgress, Grid, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import useTheme from "./../Components/CustomTheme";
import { apiKey, apiUrl } from "./Constants";

const MovieDetailPage = ({ match }) => {
  const theme = useTheme();

  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState({});
  const [error, setError] = useState(false);

  const searchById = useCallback(
    (id) => {
      axios
        .get(`${apiUrl}?i=${id}&type="movie"&apikey=${apiKey}`)
        .then((res) => {
          setLoading(false);
          if (res.data.Response === "True") {
            const result = res.data;
            const movieData = {
              title: result.Title,
              rating: result.imdbRating,
              released: result.Released,
              poster: result.Poster,
              plot: result.Plot,
              genre: result.Genre,
              actors: result.Actors,
              directors: result.Director,
            };
            setDetail(movieData);
          } else {
            setError(true);
          }
        })
        .catch((error) => {
          console.log("err", error);
          setError(true);
        });
    },
    []
  );
  useEffect(() => {
    const imdbID = match.params.movieId;
    searchById(imdbID);
  }, [match.params.movieId, searchById]);

  return (
    <Box
      style={{
        position: "absolute",
        top: theme.mixins.toolbar.minHeight,
      }}
      bgcolor="#05122a90"
      p={5}
      minHeight="95vh"
      width="100%"
    >
      {loading && !error && (
        <Box
          style={{
            fontSize: "32px",
          }}
          display="flex"
          height="50vh"
          justifyContent="center"
          alignItems="center"
        >
          <CircularProgress color="secondary" />
        </Box>
      )}
      {error && (
        <Typography variant="h3" color="secondary" align="center">
          No Data found, try again with different title
        </Typography>
      )}

      {!loading && !error && (
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Box px={3} my={{ xs: 5, md: 20 }}>
              <Typography variant="h2" color="primary">
                {detail.title}
              </Typography>
              <Typography variant="h6">
                {detail.released}, {detail.genre}
              </Typography>
              <Typography
                style={{ color: "goldenrod" }}
                component="span"
                variant="h5"
              >
                imdb : {`   `}
                {detail.rating}
              </Typography>
              <Box my={1}>
                <Typography variant="h5" component="span">
                  Cast : {`   `}
                  {detail.actors}
                </Typography>

                <Typography variant="h5" component="span"></Typography>
              </Box>
              <Typography variant="h5">
                Directed By : {detail.directors}
              </Typography>
              <Box mb={3} />
              <Typography variant="body1" style={{ color: "#fff" }}>
                {detail.plot}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={detail.poster} alt="poster" width="100%" />
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default MovieDetailPage;
