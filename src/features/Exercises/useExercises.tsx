import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getExercises } from "@/services/apiExercises.ts";

export const useExercises = (limit: number = 9, page: number = 1) => {
  const {
    isLoading,
    data: exercises,
    error,
  } = useQuery({
    queryKey: ["exercises", limit, page],
    queryFn: () => getExercises(limit, page),
    placeholderData: keepPreviousData,
  });
  return { isLoading, exercises, error };
};
