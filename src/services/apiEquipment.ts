import axios from "axios";
import { IExercise } from "./apiExercises.ts";

export const getEquipment = async (equipment: string | undefined, limit: number, page: number): Promise<IExercise> => {
  const Equipment = await axios.get(
    `https://body-works-api.up.railway.app/exercises?equipment=${equipment}&limit=${limit}&page=${page}`,
  );
  return Equipment.data.data;
};
