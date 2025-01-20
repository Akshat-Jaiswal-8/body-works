import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getTargetMuscles } from "@/services/apiTargetMuscles.ts";

const useTargetMuscles = (limit?: number) => {
  const {
    isLoading,
    data: targetMuscle,
    error,
    refetch,
    isRefetching,
  } = useQuery({
    queryKey: ["target-muscle", limit],
    queryFn: () => getTargetMuscles(limit),
    placeholderData: keepPreviousData,
  });
  return { isLoading, targetMuscle, error, refetch, isRefetching };
};

export default useTargetMuscles;
