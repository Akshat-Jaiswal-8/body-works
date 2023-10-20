import axios from "axios";


export interface IExercises {
  name: string;
  title: string;
  target: string;
  "muscles worked": string;
  bodyPart: string;
  equipment: string;
  id: string;
  blog: string;
  images: string[];
  gifUrl: string;
  videos: string[];
  keywords: string[];
}

export const getExercises = async ()  => {
  const exercises  = await axios.get("https://body-works.vercel.app/api/exercises");
  const allExercises = exercises.data.data;
  return allExercises;
}
