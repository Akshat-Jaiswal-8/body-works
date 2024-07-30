import axios from "axios";

export interface IBodyPart {
  bodyPart: string;
  imageUrl: string;
}

export const getBodyParts = async () => {
  const bodyParts = await axios.get("https://body-works-api.up.railway.app/bodyParts");
  return bodyParts.data.data;
};
