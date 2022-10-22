import { Movie, Gender } from "../../models/generics.types";
import { Dispatch, SetStateAction } from "react";

export type selectedFilter = { id: number};

export type ContextHomeTypes = {
  Movies?: Movie[];
  setPage: Dispatch<SetStateAction<number>>;
  page: number;
  allPages: number;
  genres: Gender[];
  setSelectedFilters: Dispatch<SetStateAction<selectedFilter[]>>;
  selectedFilters: selectedFilter[];
};
