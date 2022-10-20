import React, { FC } from "react";
import {
  Container,
  MovieImage,
  ContainInfos,
  MovieTitle,
  MovieDate,
} from "./styles";
import { MoviesCardProps } from "./MovieCard.types";

const MovieCard: FC<MoviesCardProps> = (props) => {
  const { image, title, createDate } = props;
  return (
    <Container>
      <MovieImage src={image}></MovieImage>
      <ContainInfos>
        <MovieTitle>{title}</MovieTitle>
        <MovieDate>{createDate}</MovieDate>
      </ContainInfos>
    </Container>
  );
};

export default MovieCard;
