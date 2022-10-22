import React, { useContext } from "react";
import {
  Container,
  FacetsCard,
  LabelCta,
  FacetsCardActive,
  CloseImage,
} from "./styles";
import { ContextHome } from "../../contexts/Home/ContextHome";
import Close from "../../images/Shape.svg";

const FacetsFilters = () => {
  const { genres, setSelectedFilters, selectedFilters } =
    useContext(ContextHome);

  const changeFilters = (filterId: number) => {
    const result = selectedFilters.find(({ id }) => id === filterId);
    if (!result) {
      setSelectedFilters((prev) => [...prev, { id: filterId }]);
    } else {
      const index = selectedFilters.findIndex((item) => item.id === filterId);
      const selectedFiltersAux = [...selectedFilters];
      selectedFiltersAux.splice(index, 1)
      setSelectedFilters([...selectedFiltersAux]);
    }
  };

  return (
    <>
      <LabelCta>FILTRE POR:</LabelCta>
      <Container>
        {genres?.map((Facet) => {
          return (
            <>
              {!selectedFilters.find(({ id }) => id === Facet.id) ? (
                <>
                  <FacetsCard
                    key={Facet.id}
                    role="button"
                    onClick={() => changeFilters(Facet.id)}
                  >
                    {Facet.name}
                  </FacetsCard>
                </>
              ) : (
                <FacetsCardActive
                  key={Facet.id}
                  role="button"
                  onClick={() => changeFilters(Facet.id)}
                >
                  {Facet.name} <CloseImage src={Close} alt="" />
                </FacetsCardActive>
              )}
            </>
          );
        })}
      </Container>
    </>
  );
};

export default FacetsFilters;
