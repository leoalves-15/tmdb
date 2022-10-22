import { Movie, Credits, ResponseMovie } from "../../models/generics.types";

export type ContextDetailsTypes = {
  currentMovie?: Movie;
  currentCredits?: Credits;
  recommended?: ResponseMovie;
};
