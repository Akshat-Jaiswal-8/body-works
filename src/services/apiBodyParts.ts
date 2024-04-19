import axios from 'axios';

export interface IBodyPart {
  bodyPart: string;
  imageUrl: string;
}

export const getBodyParts = async () => {
  const bodyParts = await axios.get(
    'https://body-works.vercel.app/api/bodyparts',
  );
  return bodyParts.data.data;
};
