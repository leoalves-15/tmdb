export type GenderId = number;

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: GenderId[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type ResponseMovie = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};
