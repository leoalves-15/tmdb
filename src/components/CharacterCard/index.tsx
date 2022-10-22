import React, { FC } from "react";
import { Container, ActorImage, ActorName, CharacterName } from "./styles";
import { Person } from "../../models/generics.types";

const CharacterCard: FC<Person> = (props) => {
  const { name, character } = props;
  return (
    <Container>
      <ActorImage />
      <ActorName>{name}</ActorName>
      <CharacterName>{character}</CharacterName>
    </Container>
  );
};

export default CharacterCard;
