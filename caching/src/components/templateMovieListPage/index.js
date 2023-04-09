import React from "react";
import Movie from "../moviesCard";
import Grid from "@mui/material/Grid";

function MovieListPageTemplate({ movies, title, action }) {
  return (

      <MovieList action={action} movies={displayedMovies}></MovieList>
);
  }
const MovieList = ( {movies, action }) => {
  let movieCards = movies.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Movie key={m.id} movie={m} action={action} />
    </Grid>
  ));
  return movieCards;
};

export default MovieList;