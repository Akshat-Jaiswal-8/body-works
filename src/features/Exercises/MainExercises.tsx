import { BiSearch } from "react-icons/bi";
import { IExercise } from "../../services/apiExercises.ts";
import ExerciseCard from "./ExerciseCard.tsx";
import { useState } from "react";
import { useExercises } from "./useExercises.tsx";

function MainExercises() {
  const limit = 9;
  const page = 1;
  const { exercises } = useExercises(limit, page);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <div className="col-span-4 my-6">
        <form className="ml-52 mr-72 px-3 rounded-xl border border-amber-700 dark:border-gray-700 text-center flex items-center justify-between">
          <input
            placeholder="Search by name"
            className="text-amber-9 bg-transparent dark:text-pink-500 font-poppins overflow-x-scroll outline-0 rounded-xl py-3 w-3/4"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="text-amber-900 dark:text-pink-500 text-xl cursor-pointer">
            <BiSearch />
          </span>
        </form>
        <div className="grid grid-cols-3 w-full">
          {exercises.map((exercise: IExercise) => {
            return (
              <ExerciseCard
                id={exercise.id}
                key={exercise.id}
                gif={exercise.gifUrl}
                title={exercise.title}
                blog={exercise.blog}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MainExercises;
