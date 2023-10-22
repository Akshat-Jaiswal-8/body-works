import axios from "axios";

export interface IEquipments {
  equipment: string;
}

export const getEquipments = async () => {
  const equipments = await axios.get(
    "https://body-works.vercel.app/api/equipments",
  );
  return equipments.data.data;
};
