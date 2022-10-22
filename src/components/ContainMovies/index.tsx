import React, { useContext } from "react";
import { Container, Contain } from "./styles";
import MovieCard from "../MovieCard";
import { ContextHome } from "../../contexts/Home/ContextHome";

const ContainMovies = () => {
  const { Movies } = useContext(ContextHome);
  return (
    <Contain>
      <Container>
        {Movies?.map((movie) => {
          return <MovieCard key={movie.id} {...movie}></MovieCard>;
        })}
      </Container>
    </Contain>
  );
};

export default ContainMovies;
