import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { GenreSelect } from "./ui/components/GenreSelect";
import { NameSelect } from "./ui/components/NameSelect";
import { MovieCard } from "./ui/components/MovieCard";
import { SearchMovies } from "./ui/components/SearchMovies";
import { SkeletonLoader } from "./ui/components/SkeletonLoader";

export const App: React.FC = () => {
  const [genre, setGenre] = useState<string | null>(null);
  const [movieId, setMovieId] = useState<string | null>(null);
  const [search, setSearch] = useState<string>("banana");
  const [load, setLoad] = useState<boolean>(false);

  return (
    <Container className="py-4">
      <div className="d-grid gap-3" style={{ maxWidth: 640, margin: '0 auto' }}>
        <SearchMovies delay={1000} search={search} setSearch={setSearch} setLoad={setLoad} />
        {!load ? 
        <SkeletonLoader /> : 
          <React.Fragment>
            <GenreSelect value={genre} onChange={(g) => { setGenre(g); setMovieId(null); }} />
            <NameSelect genre={genre} value={movieId} onChange={setMovieId} />
            <MovieCard movieId={movieId} />
            </React.Fragment>
          }

        
      </div>
    </Container>
  );
};