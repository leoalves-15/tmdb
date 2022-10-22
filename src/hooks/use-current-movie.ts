import { useEffect, useState } from "react";
import { Movie, Credits, ResponseMovie } from "../models/generics.types";
import { getMovie } from "../services/getMovie";
import { useUrl } from "./use-url";
import { getCredits } from "../services/getCredits";
import { getRecommended } from "../services/getRecommended";

export function useCurrentMovie() {
  const [currentMovie, setCurrentMovie] = useState<Movie>();
  const [currentCredits, setCurrentCredits] = useState<Credits>();
  const [recommended, setRecommended] = useState<ResponseMovie>();

  const { url } = useUrl();
  const id = url.split("id=")[1];

  useEffect(() => {
    const load = async () => {
      setCurrentMovie(await getMovie(id));
      setCurrentCredits(await getCredits(id));
      setRecommended(await getRecommended(id));
    };
    if (id) {
      load();
    }
  }, [id]);

  return {
    currentMovie,
    currentCredits,
    recommended,
  };
}
