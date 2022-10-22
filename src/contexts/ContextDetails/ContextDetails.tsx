import React, { createContext } from "react";
import { ReactNode } from "react";
import { ContextDetailsTypes } from "./ContextDetails.types";
import { useCurrentMovie } from "../../hooks/use-current-movie";

export const ContextDetails = createContext<ContextDetailsTypes>(
  {} as ContextDetailsTypes
);

const DetailsProvider = (props: { children: ReactNode }) => {
  const { currentMovie, currentCredits } = useCurrentMovie();

  return (
    <ContextDetails.Provider value={{ currentMovie, currentCredits }}>
      {props.children}
    </ContextDetails.Provider>
  );
};

export default DetailsProvider;
