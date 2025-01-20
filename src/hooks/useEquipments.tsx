import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getEquipments } from "@/services/apiEquipments.ts";

const useEquipments = (limit?: number) => {
  const {
    isLoading,
    data: equipments,
    error,
    refetch,
    isRefetching,
  } = useQuery({
    queryKey: ["equipments", limit],
    queryFn: () => getEquipments(limit),
    placeholderData: keepPreviousData,
  });
  return { isLoading, equipments, error, refetch, isRefetching };
};

export default useEquipments;
