import React, { FC } from "react";
import { Container, ActorImage, ActorName, CharacterName } from "./styles";
import { Person } from "../../models/generics.types";

const CharacterCard: FC<Person> = (props) => {
  const { name, character, profile_path } = props;
  return (
    <Container>
      <ActorImage
        src={`https://image.tmdb.org/t/p/w200${profile_path}`}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src =
            "https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png";
        }}
      />
      <ActorName>{name}</ActorName>
      <CharacterName>{character}</CharacterName>
    </Container>
  );
};

export default CharacterCard;
