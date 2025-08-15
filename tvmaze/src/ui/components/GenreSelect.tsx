// src/ui/components/GenreSelect.tsx
import React from "react";
import { Alert, Button, ButtonGroup } from "react-bootstrap";
import { useCachedQueryData } from "../hooks/useMovieIndex";
import { MovieIndex } from "../../domain/Movie";

type Props = {
  value: string | null;
  onChange: (g: string | null) => void;
};

export const GenreSelect: React.FC<Props> = ({ value, onChange }) => {
  const data = useCachedQueryData<MovieIndex>(['movies', 'current']);
  if (!data) return null;

  if (data.genres.length === 0) return <Alert variant="warning">No genres found</Alert>;

  return (
    <div>
      <h5 className="mb-3">Genres:</h5>
      <ButtonGroup vertical className="w-100">
        {data.genres.map((g) => (
          <Button
            key={g}
            variant={value === g ? 'primary' : 'outline-primary'}
            onClick={() => onChange(g)}
            className="text-start"
          >
            {g}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  )
};