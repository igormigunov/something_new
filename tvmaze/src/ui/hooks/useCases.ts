// src/ui/hooks/useCases.ts
import { useDI } from "../../di/context";

export function useCases() {
    const { searchMovies, buildMovieIndex } = useDI();
    return { searchMovies, buildMovieIndex };
}