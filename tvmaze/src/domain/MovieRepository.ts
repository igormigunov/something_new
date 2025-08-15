import { Movie } from "./Movie";

export interface MovieRepository {
    search(query: string): Promise<Movie[]>;
}