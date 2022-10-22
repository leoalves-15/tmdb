import { Movie, Credits } from "../../models/generics.types";

export type ContextDetailsTypes = {
  currentMovie?: Movie;
  currentCredits?: Credits;
};
