import axios from "axios";
import { IExercise } from "./apiExercises.ts";

export const getTargetMuscle = async (
  targetMuscle: string | undefined,
  limit: number,
  page: number,
): Promise<IExercise> => {
  const TargetMuscle = await axios.get(
    `https://body-works-api.up.railway.app/exercises?limit=${limit}&page=${page}&targetMuscle=${targetMuscle}`,
  );
  return TargetMuscle.data.data;
};
