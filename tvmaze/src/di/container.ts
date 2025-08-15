// src/di/container.ts
import { HttpMovieRepository } from "../infra/HttpMovieRepository";
import { BuildMovieIndex } from "../use_cases/BuildMovieIndex";
import { SearchMovies } from "../use_cases/SearchMovies";

export type Container = ReturnType<typeof createContainer>;


export function createContainer() {

    const repo = new HttpMovieRepository();
    const searchMovies = new SearchMovies(repo);
    const buildMovieIndex = new BuildMovieIndex();

    return {
        searchMovies,
        buildMovieIndex,
    } as const;
}