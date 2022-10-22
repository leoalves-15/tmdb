import React, { FC } from "react";
import { Container, ActorImage, ActorName, CharacterName } from "./styles";
import { Character } from "./CharacterCard.types";

const CharacterCard: FC<Character> = (props) => {
  const { Actor, Character } = props;
  return (
    <Container>
      <ActorImage/>
      <ActorName>{Actor}</ActorName>
      <CharacterName>{Character}</CharacterName>
    </Container>
  );
};

export default CharacterCard;
