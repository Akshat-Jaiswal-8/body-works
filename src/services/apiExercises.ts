import axios from "axios";

interface IExercise {
  name: string;
  title: string;
  target: string;
  "muscles worked": string;
  bodyPart: string;
  equipment: string;
  id: string;
  blog: string;
  images: string;
  gifUrl: string;
  videos: string[];
  keywords: string[];
}

const getExercises = async (limit: number, page: number) => {
  const exercises = await axios.get(
    `https://body-works.vercel.app/api/exercises?limit=${limit}&page=${page}`,
  );
  const allExercises = exercises.data.data;
  return allExercises;
};

export { getExercises };
export type { IExercise };
