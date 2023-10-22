import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import { useBodyPart } from "./useBodyPart.tsx";
import { IBodyPart } from "../../services/apiBodyPart.tsx";
import BodyPartCard from "./BodyPartCard.tsx";

function MainBodyPart() {
  const { bodyParts } = useBodyPart();

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
        {bodyParts.map((bodyPart: IBodyPart) => {
          return (
            <BodyPartCard key={bodyPart.bodyPart} name={bodyPart.bodyPart} />
          );
        })}
      </div>
    </div>
  );
}

export default MainBodyPart;
