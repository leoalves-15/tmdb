import { useEffect, useState } from "react";
import { ResponseMovie, Gender } from "../models/generics.types";
import { getPopularMovies } from "../services/getPopularMovies";
import { getGenre } from "../services/getGenre";
// import { useUrl } from "./use-url";
// colocar a pagina para aparecer na url;
export function useCurrentPage(page: string) {
  const [listCurrentPage, setlistCurrentPage] = useState<ResponseMovie>();
  const [genres, setGenres] = useState<Gender[]>([{ id: 0, name: "" }]);

  // const { url } = useUrl();
  // const page = url.split("page=")[1] || '1';

  useEffect(() => {
    const load = async () => {
      setlistCurrentPage(await getPopularMovies(page));
      setGenres(await getGenre());
    };
    if (page) load();
  }, [page]);

  return {
    listCurrentPage,
    genres,
  };
}
