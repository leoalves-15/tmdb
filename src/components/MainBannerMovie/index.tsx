import React from "react";
import {
  Container,
  Banner,
  Title,
  ContainerDetails,
  Details,
  Label,
  ContainerBanner,
} from "./styles";

const MainBannerMovie = () => {
  return (
    <Container>
      <ContainerBanner>
        <Banner />
      </ContainerBanner>
      <Title></Title>
      <ContainerDetails>
        <Details></Details>
        <Details></Details>
        <Details></Details>
        <Details></Details>
      </ContainerDetails>
      {/* grafico */}
      <Label></Label>
    </Container>
  );
};
export default MainBannerMovie;
