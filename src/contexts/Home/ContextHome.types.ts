import { Movie } from "../../models/generics.types";
import { Dispatch, SetStateAction } from "react";

export type ContextHomeTypes = {
    Movies?: Movie[];
    setPage: Dispatch<SetStateAction<number>>;
    page: number;
    allPages: number;
};
