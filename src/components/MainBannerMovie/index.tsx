import React, { useContext } from "react";
import {
  Container,
  Banner,
  Title,
  ContainerDetails,
  Details,
  Label,
  ContainerBanner,
} from "./styles";
import { ContextDetails } from "../../contexts/ContextDetails/ContextDetails";

const MainBannerMovie = () => {
  const { currentMovie } = useContext(ContextDetails);

  return (
    <Container>
      <ContainerBanner>
        <Banner />
      </ContainerBanner>
      <Title>{currentMovie?.title}</Title>
      <ContainerDetails>
        <Details></Details>
        <Details></Details>
        <Details></Details>
        <Details></Details>
      </ContainerDetails>
      {/* grafico */}
      <Label>Sinopse</Label>
      <Details>{currentMovie?.overview}</Details>
    </Container>
  );
};
export default MainBannerMovie;
