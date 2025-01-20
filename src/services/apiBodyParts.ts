import { apiCaller } from "../../lib/apiCaller.ts";

export const getBodyParts = async (limit?: number): Promise<IBodyPartData> => {
  const bodyParts = await apiCaller.get<IBodyPartData>("bodyParts", {
    params: {
      limit,
    },
  });
  return bodyParts.data;
};
