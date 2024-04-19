import axios from 'axios';
import { IExercise } from './apiExercises.ts';

export const getBodyPart = async (
  bodyPart: string | undefined,
): Promise<IExercise> => {
  const bodypart = await axios.get(
    `https://body-works.vercel.app/api/exercises?bodypart=${bodyPart}`,
  );
  return bodypart.data.data;
};
