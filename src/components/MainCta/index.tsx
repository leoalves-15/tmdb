import React from "react";
import { Container, TitleCta, Wrap } from "./styles";
import FacetsFilters from "../FacetsFilters";

const MainCta = () => {
  return (
    <Container>
      <Wrap>
      <TitleCta>
        Milhões de filmes, séries e pessoas para descobrir. Explore já.
      </TitleCta>
      <FacetsFilters/>
      </Wrap>
    </Container>
  );
};

export default MainCta;
