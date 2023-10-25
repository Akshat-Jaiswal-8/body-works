import axios from "axios";

export interface ITargetMuscle {
  targetMuscle: string;
}

export const getTargetMuscle = async () => {
  const targetMuscle = await axios.get(
    "https://body-works.vercel.app/api/targetmuscles",
  );
  return targetMuscle.data.data;
};
