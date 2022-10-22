import { useEffect, useState } from "react";
import { Movie } from "../models/generics.types";
import { getMovie} from "../services/getMovie";
import { useUrl } from "./use-url";

export function useCurrentMovie() {
  const [currentMovie, setCurrentMovie] = useState<Movie>();
  const { url } = useUrl();
  const id = url.split("id=")[1];

  useEffect(() => {
    const load = async () => {
      setCurrentMovie(await getMovie(id));
    };
    if(id) load();
    else window.alert(`404 - Page not found`);
  }, [id]);

  return {
    currentMovie,
  };
}
