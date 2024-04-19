import { useQuery } from "@tanstack/react-query";
import { getExercises } from "../../services/apiExercises.ts";

export const useExercises = (limit: number = 9, page: number = 0) => {
  const {
    isLoading,
    data: exercises,
    error,
  } = useQuery({
    queryKey: ["exercises"],
    queryFn: () => getExercises(limit, page),
  });
  return { isLoading, exercises, error };
};
