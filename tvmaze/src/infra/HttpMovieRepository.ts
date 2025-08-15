import { Movie } from "../domain/Movie";
import { MovieRepository } from "../domain/MovieRepository";

export class HttpMovieRepository implements MovieRepository {
    async search(query: string): Promise<Movie[]> {
        const response = await fetch(`http://localhost:3001/api/search?q=${query}`);
        const data = await response.json();
        return data.map((result: { show: { id: string; name: string; summary: string; genres: string[] } }) => ({
            id: result.show.id,
            name: result.show.name,
            summary: result.show.summary,
            genres: result.show.genres,
        }));
    }
}