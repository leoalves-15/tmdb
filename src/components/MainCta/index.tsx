import React from "react";
import { Container, TitleCta } from "./styles";
import FacetsFilters from "../FacetsFilters";

const MainCta = () => {
  return (
    <Container>
      <TitleCta>
        Milhões de filmes, séries e pessoas para descobrir. Explore já.
      </TitleCta>
      <FacetsFilters/>
    </Container>
  );
};

export default MainCta;
