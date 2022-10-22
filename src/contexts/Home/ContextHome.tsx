import React, { createContext, useState, useEffect } from "react";
import { ReactNode } from "react";
import { Movie } from "../../models/generics.types";
import { ContextHomeTypes, selectedFilter } from "./ContextHome.types";
import { useCurrentPage } from "../../hooks/use-current-page";

export const ContextHome = createContext<ContextHomeTypes>(
  {} as ContextHomeTypes
);

const HomeProvider = (props: { children: ReactNode }) => {
  const [Movies, setMovie] = useState<Movie[]>();
  const [selectedFilters, setSelectedFilters] = useState<selectedFilter[]>([
    { id: -1 },
  ]);
  const [page, setPage] = useState(1);
  const [allPages, setAllPages] = useState(0);
  const { listCurrentPage, genres } = useCurrentPage(`${page}`);

  useEffect(() => {
    setMovie(listCurrentPage?.results);
    setAllPages(
      listCurrentPage?.total_pages ? listCurrentPage?.total_pages : 0
    );
  }, [listCurrentPage]);

  return (
    <ContextHome.Provider
      value={{
        Movies,
        setPage,
        page,
        allPages,
        genres,
        setSelectedFilters,
        selectedFilters,
      }}
    >
      {props.children}
    </ContextHome.Provider>
  );
};

export default HomeProvider;
