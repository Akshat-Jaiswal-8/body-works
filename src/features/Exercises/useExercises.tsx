import { useQuery } from "@tanstack/react-query";
import { getExercises } from "../../services/apiExercises.ts";

export const useExercises = () => {
  const {
    isLoading,
    data: exercises,
    error,
  } = useQuery({
    queryKey: ["exercises"],
    queryFn: getExercises,
  });

  return { isLoading, exercises , error };
}
