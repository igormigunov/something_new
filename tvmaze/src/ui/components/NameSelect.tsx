import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { useCachedQueryData } from "../hooks/useMovieIndex";
import { MovieIndex } from "../../domain/Movie";

type Props = {
  genre: string | null;
  value: string | null;
  onChange: (id: string | null) => void;
};

export const NameSelect: React.FC<Props> = ({ genre, value, onChange }) => {
  const data = useCachedQueryData<MovieIndex>(['movies', 'current']);
  if (!data) return null;
  const titles = genre ? data?.namesByGenre.get(genre) ?? [] : [];

  return titles.length > 0 ? (
    <div>
      <h5 className="mb-3">Names:</h5>
      <ButtonGroup vertical className="w-100">
        {titles.map((t) => (
          <Button
            key={t.id}
            variant={value === t.id ? 'primary' : 'outline-primary'}
            onClick={() => onChange(t.id)}
            className="text-start"
          >
            {t.name}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  ) : null;
};