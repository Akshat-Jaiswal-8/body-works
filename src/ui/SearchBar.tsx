import { BiSearch } from "react-icons/bi";
import React, { useState } from "react";

function SearchBar(): React.ReactNode {
  const [searchQuery, setSearchQuery] = useState<string>("");
  return (
    <>
      <div className={"mx-auto w-1/2 items-center justify-center"}>
        <form className="flex items-center justify-between rounded-lg border border-border-light-primary-color px-4 text-center dark:border-gray-700 xs:text-[1rem] md:text-lg">
          <input
            placeholder="Search by name"
            className="w-3/4 overflow-x-scroll rounded-xl bg-transparent py-3 font-poppins text-amber-700 focus:outline-none dark:text-pink-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="cursor-pointer text-amber-900 dark:text-pink-500 xs:text-[1rem] md:text-xl">
            <BiSearch />
          </span>
        </form>
      </div>
    </>
  );
}
export default SearchBar;
