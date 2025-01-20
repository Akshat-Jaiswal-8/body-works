import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getEquipment } from "@/services/apiEquipment.ts";

export const useEquipment = (
  equipment: string | undefined,
  limit: number = 9,
  page: number = 1,
) => {
  const {
    isLoading,
    data: Equipment,
    error,
    refetch,
    isRefetching,
  } = useQuery({
    queryKey: ["equipment", limit, page],
    queryFn: () => getEquipment(equipment, limit, page),
    placeholderData: keepPreviousData,
  });
  return { isLoading, Equipment, error, refetch, isRefetching };
};
