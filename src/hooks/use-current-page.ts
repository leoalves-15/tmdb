import { useEffect, useState } from "react";
import { ResponseMovie } from "../models/generics.types";
import { getPopularMovies } from "../services/getPopularMovies";
// import { useUrl } from "./use-url";

export function useCurrentMovies(page: string) {
  const [listCurrentPage, setlistCurrentPage] = useState<ResponseMovie>();
  // const { url } = useUrl();
  // const page = url.split("page=")[1] || '1';

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
