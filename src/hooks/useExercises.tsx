import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getExercises } from "@/services/apiExercises.ts";

const useExercises = (limit: number = 9, page: number = 1) => {
  const {
    isLoading,
    data: exercises,
    error,
    refetch,
    isRefetching,
  } = useQuery({
    queryKey: ["exercises", limit, page],
    queryFn: () => getExercises(limit, page),
    placeholderData: keepPreviousData,
  });
  return { isLoading, exercises, error, refetch, isRefetching };
};

export default useExercises;
