import axios from 'axios';
import { IExercise } from './apiExercises.ts';

export const getTargetMuscle = async (
  targetMuscle: string | undefined,
): Promise<IExercise> => {
  const TargetMuscle = await axios.get(
    `https://body-works.vercel.app/api/exercises?targetMuscle=${targetMuscle}`,
  );
  console.log(TargetMuscle);
  return TargetMuscle.data.data;
};
