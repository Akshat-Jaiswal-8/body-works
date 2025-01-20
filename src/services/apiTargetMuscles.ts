import { apiCaller } from "../../lib/apiCaller.ts";

export const getTargetMuscles = async (limit?: number): Promise<ITargetMuscleData> => {
  const targetMuscles = await apiCaller.get<ITargetMuscleData>("targetMuscles", {
    params: {
      limit,
    },
  });
  return targetMuscles.data;
};
