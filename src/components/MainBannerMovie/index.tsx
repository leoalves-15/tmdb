import React, { useContext } from "react";
import {
  Container,
  Banner,
  Title,
  ContainerDetails,
  Details,
  Label,
  Description,
  ContainerBanner,
} from "./styles";
import { ContextDetails } from "../../contexts/ContextDetails/ContextDetails";
import { Convert } from "../../utils/MinToH";

const MainBannerMovie = () => {
  const { currentMovie } = useContext(ContextDetails);

  return (
    <Container>
      <ContainerBanner>
        <Banner
          src={`https://image.tmdb.org/t/p/w400${currentMovie?.poster_path}`}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src =
              "https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png";
          }}
        />
      </ContainerBanner>
      <Title>{currentMovie?.title}</Title>
      <ContainerDetails>
        <Description>{currentMovie?.adult && "Adult"}</Description>
        <Description>{currentMovie?.release_date}</Description>
        <Description>
          {currentMovie?.genres?.map((genre, index) => {
            return (
              <ContainerDetails key={genre.id}>
                {genre.name}
                {index !== currentMovie.genres.length - 1 && ", "}
              </ContainerDetails>
            );
          })}
        </Description>
        <Description>{Convert(currentMovie?.runtime)}</Description>
      </ContainerDetails>
      {/* grafico */}
      <Label>Sinopse</Label>
      <Details>{currentMovie?.overview}</Details>
      {/* grafico */}
    </Container>
  );
};
export default MainBannerMovie;
