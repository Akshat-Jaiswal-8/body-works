import { apiCaller } from "../../lib/apiCaller.ts";

export const getEquipments = async (limit?: number): Promise<IEquipmentData> => {
  const equipments = await apiCaller.get<IEquipmentData>(`equipments/`, {
    params: {
      limit,
    },
  });
  return equipments.data;
};
