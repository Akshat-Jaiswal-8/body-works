import axios from "axios";

export interface ITargetMuscles {
  targetMuscle: string;
  imageUrl: string;
}

export const getTargetMuscles = async () => {
  const targetMuscles = await axios.get("https://body-works-api.up.railway.app/targetMuscles");
  return targetMuscles?.data?.data;
};
