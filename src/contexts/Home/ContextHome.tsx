import React, { createContext, useState, useEffect } from "react";
import { ReactNode } from "react";
import { Movie } from "../../models/generics.types";
import { ContextHomeTypes } from "./ContextHome.types";
import { useCurrentMovies } from "../../hooks/use-current-page";

export const ContextHome = createContext<ContextHomeTypes>(
  {} as ContextHomeTypes
);

const HomeProvider = (props: { children: ReactNode }) => {
  const [Movies, setMovie] = useState<Movie[]>();
  const { listCurrentPage } = useCurrentMovies();
  useEffect(() => {
    return () => {
      setMovie(listCurrentPage?.results);
    };
  }, [listCurrentPage]);
  return (
    <ContextHome.Provider value={{ Movies }}>
      {props.children}
    </ContextHome.Provider>
  );
};

export default HomeProvider;
