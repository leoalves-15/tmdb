import React, { createContext, useState, useEffect } from "react";
import { ReactNode } from "react";
import { Movie } from "../../models/generics.types";
import { ContextDetailsTypes } from "./ContextDetails.types";
import { useCurrentMovie } from "../../hooks/use-current-movie";

export const ContextDetails = createContext<ContextDetailsTypes>(
  {} as ContextDetailsTypes
);

const DetailsProvider = (props: { children: ReactNode }) => {
  const [Movie, setMovie] = useState<Movie>();
  const { currentMovie } = useCurrentMovie();
  console.log("currentMovie", currentMovie);

  useEffect(() => {
    setMovie(currentMovie);
  }, [currentMovie]);

  console.log("Movie", Movie);

  return (
    <ContextDetails.Provider value={{ Movie }}>
      {props.children}
    </ContextDetails.Provider>
  );
};

export default DetailsProvider;
