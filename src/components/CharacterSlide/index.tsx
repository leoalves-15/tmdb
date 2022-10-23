import React, { useContext } from "react";
import { Container, Contain } from "./styles";
import CharacterCard from "../CharacterCard";
import { ContextDetails } from "../../contexts/ContextDetails/ContextDetails";
import { Title } from "../../styles/generic.styles";

const CharacterSlide = () => {
  const { currentCredits } = useContext(ContextDetails);

  return (
    <Contain>
      <Title>Elenco original</Title>
      <Container>
        {currentCredits?.cast?.map((Character) => {
          return (
            <CharacterCard key={Character.id} {...Character}></CharacterCard>
          );
        })}
      </Container>
    </Contain>
  );
};

export default CharacterSlide;
