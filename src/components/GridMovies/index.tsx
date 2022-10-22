import React, { FC } from "react";
import { Container } from "./styles";
import MovieCard from "../MovieCard";
import { GridMoviesProps } from "./GridMovies.types";

const GridMovies: FC<GridMoviesProps> = (props) => {
  const { Movies } = props;
  return (
    <Container>
      {Movies?.map((movie) => {
        return <MovieCard key={movie.id} {...movie}></MovieCard>;
      })}
    </Container>
  );
};

export default GridMovies;
