import axios from "axios";

export interface IEquipments {
  equipment: string;
  imageUrl: string;
}

export const getEquipments = async () => {
  const equipments = await axios.get("https://body-works-api.up.railway.app/equipments");
  return equipments.data.data;
};
