import React, { useContext } from "react";
import { Contain } from "./styles";
import { ContextHome } from "../../contexts/Home/ContextHome";
import GridMovies from "../GridMovies";

const ContainMovies = () => {
  const { Movies } = useContext(ContextHome);
  return (
    <Contain>
      {Movies && (
        <>
          {Movies?.length > 0 ? (
            <GridMovies Movies={Movies} />
          ) : (
            <>Nada a mostar por aqui</>
          )}
        </>
      )}
    </Contain>
  );
};

export default ContainMovies;
