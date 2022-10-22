import React from "react";
import { Container } from "./styles";
import CharacterCard from "../CharacterCard";

const Characters = [{ Actor: "string", Character: "string" }];

const CharacterSlide = () => {
  return (
    <Container>
      {Characters?.map((Character) => {
        return (
          <CharacterCard key={Character.Actor} {...Character}></CharacterCard>
        );
      })}
    </Container>
  );
};

export default CharacterSlide;
