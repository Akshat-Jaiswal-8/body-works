import { useQuery } from "@tanstack/react-query";
import { getExercise } from "../../services/apiExercise.ts";

export const useExercise = (props: string | undefined) => {
  const exerciseId: string | undefined = props;
  const {
    isLoading,
    data: exercise,
    error,
  } = useQuery({
    queryKey: ["exercise"],
    queryFn: () => getExercise(exerciseId),
  });
  return { isLoading, exercise, error };
};
