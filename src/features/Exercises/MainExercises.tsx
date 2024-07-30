import { IExercise } from "@/services/apiExercises.ts";
import { ExerciseCard } from "./ExerciseCard.tsx";
import { useExercises } from "./useExercises.tsx";
import Spinner from "@/ui/Spinner.tsx";
import Error from "@/pages/Error.tsx";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination.tsx";
import { useState } from "react";

function MainExercises() {
  const [page, setPage] = useState<number>(1);

  const {
    isLoading,
    exercises,
    error,
  }: {
    isLoading: boolean;
    exercises: IExercise[];
    error: Error | null;
  } = useExercises(9, page);

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
  };

  if (isLoading) return <Spinner />;
  if (error) return <Error />;

  return (
    <>
      <div className="xs:mx-auto sm:mx-12 md:w-[calc(100vw-20rem)] md:ml-[19.5rem] xs:mt-[120px] md:mt-[80px] ">
        {/*<SearchBar />*/}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 mb-10 w-full">
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
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious onClick={handlePreviousPage} />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext onClick={handleNextPage} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
}

export default MainExercises;
