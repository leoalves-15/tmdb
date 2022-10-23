import axios from "axios";
import { config } from "./configAxios";

export const getPopularMovies = async (page: string) => {
  const configAxios = config("get", "movie/popular", `page=${page}`);

  try {
    const response = await axios(configAxios);

    return response.data;
  } catch (error) {
    return window.alert(`${error}, consulte o admistrador do sistema`);
  }
};
