import React from "react";
import { Container, FacetsCard, LabelCta } from "./styles";

const FacetsFilters = () => {
  const Facets = [
    "Ação",
    "Aventura",
    "Animação",
    "Comedia",
    "Crime",
    "Documentário",
  ];
  return (
    <>
      <LabelCta>FILTRE POR:</LabelCta>
      <Container>
        {Facets.map((Facet) => {
          return <FacetsCard>{Facet}</FacetsCard>;
        })}
      </Container>
    </>
  );
};

export default FacetsFilters;
