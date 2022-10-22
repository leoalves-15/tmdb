import React from "react";
import {
  Container,
  Title,
  TitleContainer,
  ContainerCharacters,
} from "./styles";
import CharacterCard from "../CharacterCard";
const Characters = [{ Actor: "string", Character: "string" }];
const CharacterSlide = () => {
  return (
    <Container>
      <TitleContainer>
        <Title></Title>
        <ContainerCharacters>
          {Characters.map((Character) => {
            return <CharacterCard {...Character}></CharacterCard>;
          })}
        </ContainerCharacters>
      </TitleContainer>
    </Container>
  );
};

export default CharacterSlide;
