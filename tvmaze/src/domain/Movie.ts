export type Movie = {
  id: string;
  genres: string[];
  name: string;
  summary: string;
};

export type MovieIndex = {
  byId: Map<string, Movie>;
  genres: string[];
  namesByGenre: Map<string, Array<{ id: string; name: string }>>;
};