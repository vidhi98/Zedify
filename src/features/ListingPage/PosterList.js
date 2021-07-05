import { Grid } from "@material-ui/core";
import React from "react";
import PosterCard from "./PosterCard";

const PosterList = (props) => {
  return (
    <>
      <Grid container spacing={4}>
        {props.list.map((movie) => (
          <Grid item xs={6} sm={4} md={3} lg={2} key={movie.imdbID}>
            <PosterCard
              key={movie.imdbID}
              title={movie.Title}
              year={movie.Year}
              image={movie.Poster}
              imdbID={movie.imdbID}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default PosterList;
