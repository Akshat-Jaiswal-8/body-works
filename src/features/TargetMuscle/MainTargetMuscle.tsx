import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import TargetMuscleCard from "./TargetMuscleCard.tsx";
import { useTargetMuscle } from "./useTargetMuscle.tsx";
import { ITargetMuscle } from "../../services/apiTargetMuscle.ts";

function MainTargetMuscle() {
  const { targetMuscle } = useTargetMuscle();
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
        {targetMuscle.map((targetMuscle: ITargetMuscle) => {
          return (
            <TargetMuscleCard
              key={targetMuscle.targetMuscle}
              name={targetMuscle.targetMuscle}
              image={targetMuscle.imageUrl}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MainTargetMuscle;
