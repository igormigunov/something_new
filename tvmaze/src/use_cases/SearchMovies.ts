import { Movie } from "../domain/Movie";
import { MovieRepository } from "../domain/MovieRepository";

export class SearchMovies {
    constructor(private r: MovieRepository) { }
    async exec(query: string): Promise<Movie[]> {
        if (!query) return [];

        return this.r.search(query);
    }
}