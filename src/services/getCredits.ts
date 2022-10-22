import axios from "axios";
import { config } from "./configAxios";

export const getCredits = async (id: string) => {
  const configAxios = config("get", `movie/${id}/credits`);

  try {
    const response = await axios(configAxios);

    return response.data;
  } catch (error) {
    return window.alert(`${error}, consulte o admistrador do sistema`);
  }
};
