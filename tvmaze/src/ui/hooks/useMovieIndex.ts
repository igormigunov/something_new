import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useCases } from "./useCases";
import { MovieIndex } from "../../domain/Movie";
import { useCallback, useEffect, useSyncExternalStore } from "react";


export function useSearchMovieIndex(search: string) {
  const { searchMovies, buildMovieIndex } = useCases();
  const qc = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ["movies", search],
    queryFn: async () => {
      const movies = await searchMovies.exec(search);
      return buildMovieIndex.execute(movies);
    },
    staleTime: 5 * 60 * 1000,
  });

  useEffect(() => {
    if (data) {
      console.log('useSearchMovieIndex', data);
      qc.setQueryData(['movies', 'current'], data);
    }
  }, [data, search]);

  return { data: data as MovieIndex, isLoading };
}

export function useCachedQueryData<TData = unknown>(queryKey: unknown[]) {
  const qc = useQueryClient();

  const getSnapshot = useCallback(
    () => qc.getQueryData<TData>(queryKey),
    [qc, JSON.stringify(queryKey)]
  );

  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      const unsub = qc.getQueryCache().subscribe(onStoreChange);
      return () => unsub();
    },
    [qc]
  );

  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}