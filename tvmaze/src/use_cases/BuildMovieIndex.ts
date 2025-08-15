import type { Movie, MovieIndex } from "../domain/Movie";

export class BuildMovieIndex {
    execute(movies: Movie[]): MovieIndex {
        const byId: Map<string, Movie> = new Map(movies.map(m => [m.id, m]));
        const genreSet = new Set<string>(movies.flatMap(m => m.genres));
        const namesByGenre: Map<string, Array<{ id: string; name: string }>> = new Map();

        for (const g of Array.from(genreSet)) {
            namesByGenre.set(g, movies.filter(m => m.genres.includes(g)).map(m => ({ id: m.id, name: m.name })).sort((a, b) => a.name.localeCompare(b.name)));
        }
        return { byId, namesByGenre, genres: Array.from(genreSet).sort() };
    }
}