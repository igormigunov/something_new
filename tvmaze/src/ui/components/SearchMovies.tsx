import React, { useEffect, useMemo } from "react";
import { Form, Badge } from "react-bootstrap";
import { useDebouncedValue } from "../hooks/useDebouncedValue";
import { useSearchMovieIndex } from "../hooks/useMovieIndex";

type Props = {
  delay?: number;
  search: string;
  setSearch: (search: string) => void;
  setLoad: (load: boolean) => void;
};

export const SearchMovies: React.FC<Props> = ({ delay = 300, search, setSearch, setLoad }) => {
  const debounced = useDebouncedValue(search, delay);
  const { data, isLoading } = useSearchMovieIndex(debounced);
  const count = useMemo(() => data?.byId.size ?? 0, [data]);

  useEffect(() => {
    setLoad(!isLoading);
  }, [isLoading]);

  return (
    <div>
      <Form.Control
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Start typing..."
        size="lg"
      />
      <div className="mt-2">
        {isLoading ? (
          <Badge bg="info">Searching...</Badge>
        ) : debounced ? (
          <Badge bg="success">Found: {count} movies</Badge>
        ) : (
          <Badge bg="secondary">Enter search query</Badge>
        )}
      </div>
    </div>
  );
};