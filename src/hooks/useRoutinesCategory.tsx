import { useQuery } from "@tanstack/react-query";
import { getRoutineCategories } from "@/services/apiRoutineCategory.ts";

export const useRoutinesCategory = () => {
  const {
    isLoading,
    data: routineCategory,
    error,
    refetch,
    isRefetching,
  } = useQuery({
    queryKey: ["routine-categories"],
    queryFn: getRoutineCategories,
  });
  return { isLoading, routineCategory, error, refetch, isRefetching };
};
