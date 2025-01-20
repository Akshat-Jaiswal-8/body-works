import { apiCaller } from "../../lib/apiCaller.ts";

const getExercises = async (limit: number, page: number): Promise<IExerciseData> => {
  const exercises = await apiCaller.get<IExerciseData>(`/exercises`, {
    params: {
      limit,
      page,
    },
  });
  return exercises.data;
};

export { getExercises };
