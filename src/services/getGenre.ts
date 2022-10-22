import axios from "axios";
import { config } from "./configAxios";

export const getGenre = async () => {
  const configAxios = config("get", `genre/movie/list`);

  try {
    const response = await axios(configAxios);

    return response.data.genres;
  } catch (error) {
    return window.alert(`${error}, consulte o admistrador do sistema`);
  }
};
