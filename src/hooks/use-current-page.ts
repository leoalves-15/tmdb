import { useEffect, useState } from "react";
import { ResponseMovie, Gender } from "../models/generics.types";
import { getPopularMovies } from "../services/getPopularMovies";
import { getGenre } from "../services/getGenre";
import { getResultForGenre } from "../services/getResultForGenre";
import { selectedFilter } from "../contexts/Home/ContextHome.types";

// import { useUrl } from "./use-url";
// colocar a pagina para aparecer na url;
export function useCurrentPage(page: string, ids?: selectedFilter[]) {
  const [listCurrentPage, setlistCurrentPage] = useState<ResponseMovie>();
  const [genres, setGenres] = useState<Gender[]>([{ id: 0, name: "" }]);
  const [filttered, setFilttered] = useState<ResponseMovie>();

  // const { url } = useUrl();
  // const page = url.split("page=")[1] || '1';

  useEffect(() => {
    const load = async () => {
      setlistCurrentPage(await getPopularMovies(page));
      setGenres(await getGenre());
      setFilttered(await getResultForGenre(ids));
    };
    if (page) load();
  }, [page, ids]);

  return {
    listCurrentPage,
    genres,
    filttered
  };
}
