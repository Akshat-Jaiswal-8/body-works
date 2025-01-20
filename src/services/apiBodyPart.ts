import { apiCaller } from "../../lib/apiCaller.ts";

export const getBodyPart = async (
  bodyPart: string | undefined,
  limit: number,
  page: number,
): Promise<IExercise> => {
  const bodypart = await apiCaller.get<IExerciseResponse>("exercises", {
    params: {
      bodyPart,
      limit,
      page,
    },
  });
  return bodypart.data.data;
};
