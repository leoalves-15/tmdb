import React, {useContext} from "react";
import { Contain } from "./styles";
import GridMovies from "../GridMovies";
import { ContextDetails } from "../../contexts/ContextDetails/ContextDetails";

const Recommededs = () => {
  const { recommended } = useContext(ContextDetails);
console.log(recommended)
  return (
    <Contain>
      <GridMovies Movies={recommended?.results.splice(0, 6)}/>
    </Contain>
  );
};

export default Recommededs;
