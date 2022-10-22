export const config = (method: string, endpoint: string, page?: string) => {
  return {
    method: method,
    url: `${process.env.BASE_URL}${endpoint}?api_key=${process.env.SECRET_API}&language=en-US&${page && `page=${page}`}`,
    headers: {},
  };
};
