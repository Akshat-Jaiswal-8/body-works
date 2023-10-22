import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import { useEquipments } from "./useEquipments.tsx";
import { IEquipments } from "../../services/apiEquipments.ts";
import EquipmentCard from "./EquipmentCard.tsx";

function MainEquipments() {
  const { equipments } = useEquipments();

  console.log(equipments);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="col-span-4 my-6">
      <form className="ml-[12.5rem] mr-72 px-3 rounded-xl border border-gray-500 text-center flex items-center justify-between">
        <input
          placeholder="Search by name"
          className="bg-transparent font-poppins overflow-x-scroll outline-0 rounded-xl py-3 w-3/4 text-pink-500 "
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <span className="text-pink-500 text-xl cursor-pointer">
          <BiSearch />
        </span>
      </form>
      <div className="grid grid-cols-3 gap-8 mx-12 mt-10">
        {equipments.map((equipment: IEquipments) => {
          return (
            <EquipmentCard
              key={equipment.equipment}
              name={equipment.equipment}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MainEquipments;
