import axios from "axios";
import { config } from "./configAxios";
import { selectedFilter } from "../contexts/Home/ContextHome.types";

export const getResultForGenre = async (ids?: selectedFilter[]) => {
  const idFormatted = ids?.map((item) => {
    return item.id;
  });
  idFormatted?.shift();
  const idFormattedString = idFormatted?.join(",");
  const configAxios = config("get", `discover/movie`, `with_genres=${idFormattedString}`);

  try {
    const response = await axios(configAxios);

    return response.data;
  } catch (error) {
    return window.alert(`${error}, consulte o admistrador do sistema`);
  }
};
