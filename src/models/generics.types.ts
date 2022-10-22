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

export type Person = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character?: string;
  credit_id: string;
  order?: number;
  job?: string;
}; 

export type Credits = {
  id: number;
  cast: Person[];
  crew: Person[];
};
