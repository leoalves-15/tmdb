import { useEffect, useState } from "react";
import { Movie } from "../models/generics.types";
import { getPopularMovies } from "../services/getPopularMovies";
import { useUrl } from "./use-url";

export function useCurrentMovies() {
  const [listCurrentPage, setlistCurrentPage] = useState<Movie>();
  const { url } = useUrl();
  const page = url.split("page=")[1] || '1';

  useEffect(() => {
    const load = async () => {
      setlistCurrentPage(await getPopularMovies(page));
    };
    if(page) load();
  }, [page]);

  return {
    listCurrentPage,
  };
}
