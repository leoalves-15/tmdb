import React, { useContext } from "react";
import { Contain } from "./styles";
import { ContextHome } from "../../contexts/Home/ContextHome";
import GridMovies from "../GridMovies";

const ContainMovies = () => {
  const { Movies } = useContext(ContextHome);
  return (
    <Contain>
      <GridMovies Movies={Movies} />
    </Contain>
  );
};

export default ContainMovies;
