import React, { FC } from "react";
import { Container, MovieImage, MovieTitle, MovieDate } from "./styles";
import { Movie } from "../../models/generics.types";

const MovieCard: FC<Movie> = (props) => {
  const { poster_path, title, release_date } = props;
  return (
    <Container>
      <MovieImage
        src={poster_path}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src =
            "https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png";
        }}
      ></MovieImage>
      <>
        <MovieTitle>{title}</MovieTitle>
        <MovieDate>{release_date}</MovieDate>
      </>
    </Container>
  );
};

export default MovieCard;
