import axios from 'axios';
import { IExercise } from './apiExercises.ts';

export const getEquipment = async (
  equipment: string | undefined,
): Promise<IExercise> => {
  const Equipment = await axios.get(
    `https://body-works.vercel.app/api/exercises?equipment=${equipment}`,
  );
  return Equipment.data.data;
};
