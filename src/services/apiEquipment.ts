import { apiCaller } from "../../lib/apiCaller.ts";

export const getEquipment = async (
  equipment: string | undefined,
  limit: number,
  page: number,
): Promise<IExercise> => {
  const Equipment = await apiCaller.get<IExerciseResponse>("exercises", {
    params: { equipment, limit, page },
  });
  return Equipment.data.data;
};
