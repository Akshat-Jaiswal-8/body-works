import axios from "axios";

export interface IBodyPart {
  bodyPart: string;
  imageUrl: string;
}

export const getBodyPart = async () => {
  const bodyPart = await axios.get(
    "https://body-works.vercel.app/api/bodyparts",
  );
  return bodyPart.data.data;
};
