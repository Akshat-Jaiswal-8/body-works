import { useQuery } from "@tanstack/react-query";
import { getEquipments } from "../../services/apiEquipments.ts";

export const useEquipments = () => {
  const {
    isLoading,
    data: equipments,
    error,
  } = useQuery({
    queryKey: ["equipments"],
    queryFn: getEquipments,
  });
  return { isLoading, equipments, error };
};
