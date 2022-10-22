import React, { FC } from "react";
import { Container, MovieImage, MovieTitle, MovieDate } from "./styles";
import { Movie } from "../../models/generics.types";
import { useNavigate } from "react-router-dom";

const MovieCard: FC<Movie> = (props) => {
  const { poster_path, title, release_date, id } = props;
  const navigate = useNavigate();

  return (
    <Container role="button" onClick={() => navigate(`/Movie?id=${id}`)}>
      <MovieImage
        src={`https://image.tmdb.org/t/p/w300${poster_path}`}
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
