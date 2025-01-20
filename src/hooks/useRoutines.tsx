import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getRoutines } from "@/services/apiRoutines.ts";

export const useRoutines = (searchName: string | undefined, limit: number, page: number) => {
  const {
    isLoading,
    data: routines,
    error,
    refetch,
    isRefetching,
  } = useQuery({
    queryKey: ["routines", limit, page],
    queryFn: () => getRoutines(searchName, limit, page),
    placeholderData: keepPreviousData,
  });
  return { isLoading, routines, error, refetch, isRefetching };
};

export default useRoutines;
