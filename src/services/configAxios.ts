export const config = (method: string, endpoint: string, page?: string) => {
  return {
    method: method,
    url: `${process.env.REACT_APP_BASE_URL_API}${endpoint}?api_key=${
      process.env.REACT_APP_SECRET_API
    }&language=en-US&${page && `page=${page}`}`,
    headers: {},
  };
};
