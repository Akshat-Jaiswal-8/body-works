import { getRoutine } from "@/services/apiRoutine.ts";
import { useQuery } from "@tanstack/react-query";

type routineId = {
  routineId: string | undefined;
};

function useRoutine({ routineId }: routineId) {
  const {
    isLoading,
    data: routine,
    error,
    refetch,
    isRefetching,
  } = useQuery({
    queryKey: ["routine"],
    queryFn: () => getRoutine({ routineId }),
  });
  return { isLoading, routine, error, refetch, isRefetching };
}

export default useRoutine;
