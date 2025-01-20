import { apiCaller } from "../../lib/apiCaller.ts";

export const getTargetMuscle = async (
  targetMuscle: string | undefined,
  limit: number,
  page: number,
): Promise<IExercise> => {
  const targetMuscles = await apiCaller.get<IExerciseResponse>("exercises", {
    params: {
      targetMuscle,
      limit,
      page,
    },
  });
  return targetMuscles.data.data;
};
