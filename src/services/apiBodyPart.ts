import axios from "axios";
import { IExercise } from "./apiExercises.ts";

export const getBodyPart = async (bodyPart: string | undefined, limit: number, page: number): Promise<IExercise> => {
  const bodypart = await axios.get(
    `https://body-works-api.up.railway.app/exercises?bodypart=${bodyPart}&limit=${limit}&page=${page}`,
  );
  return bodypart.data.data;
};
