import { useEffect, useState } from "react";
import { Movie } from "../models/generics.types";
import { getPopularMovies } from "../services/getPopularMovies";
import { useUrl } from "./use-url";

export function useCurrentTask() {
  const [currentTask, setCurrentTask] = useState<Movie>();
  const { url } = useUrl();
  const id = url.split("id=")[1];

  useEffect(() => {
    const load = async () => {
      setCurrentTask(await getPopularMovies(id));
    };
    if(id) load();
    else window.alert(`404 - Page not found`);
  }, [id]);

  return {
    currentTask,
  };
}
