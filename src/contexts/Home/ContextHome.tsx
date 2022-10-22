import React, { createContext, useState } from "react";
import { ReactNode } from "react";
import { Movie } from "../../models/generics.types";
import { ContextHomeTypes } from "./ContextHome.types";
import { useCurrentMovies } from "../../hooks/use-current-page";

export const ContextHome = createContext<ContextHomeTypes>(
  {} as ContextHomeTypes
);

const HomeProvider = (props: { children: ReactNode }) => {
  const [Movies, setMovie] = useState<Movie[]>([] as Movie[]);
  const listMovies = useCurrentMovies();
  console.log('listMovies', listMovies)
  return <ContextHome.Provider value={{}}></ContextHome.Provider>;
};

export default HomeProvider;
