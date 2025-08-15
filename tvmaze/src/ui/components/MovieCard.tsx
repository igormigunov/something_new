import React from "react";
import { Card, Alert } from "react-bootstrap";
import { useCachedQueryData } from "../hooks/useMovieIndex";
import { MovieIndex } from "../../domain/Movie";

export const MovieCard: React.FC<{ movieId: string | null }> = ({ movieId }) => {
  const data = useCachedQueryData<MovieIndex>(['movies', 'current']);
  if (!movieId || !data) return null;
  const m = data.byId.get(movieId);
  
  return m ? (
    <Card>
      <Card.Header as="h3">{m.name}</Card.Header>
      <Card.Body>
        <Card.Text>{m.summary}</Card.Text>
      </Card.Body>
    </Card>
  ) : null;
};