import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getBodyParts } from "@/services/apiBodyParts.ts";

export const useBodyParts = (limit?: number) => {
  const {
    isLoading,
    data: bodyParts,
    error,
    refetch,
    isRefetching,
  } = useQuery({
    queryKey: ["body-parts", limit],
    queryFn: () => getBodyParts(limit),
    placeholderData: keepPreviousData,
  });
  return { isLoading, bodyParts, error, isRefetching, refetch };
};
