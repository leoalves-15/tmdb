import React, { useContext } from "react";
import { Container, Banner } from "./styles";
import { Title } from "../../styles/generic.styles";
import { ContextDetails } from "../../contexts/ContextDetails/ContextDetails";

const TraillerBanner = () => {
  const { currentMovie } = useContext(ContextDetails);

  return (
    <>
      {currentMovie?.video && (
        <>
          <Title>Trailler</Title>
          <Container>
            <Banner src={currentMovie.backdrop_path}/>
          </Container>
        </>
      )}
    </>
  );
};

export default TraillerBanner;
