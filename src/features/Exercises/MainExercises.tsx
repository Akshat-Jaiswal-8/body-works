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
import SearchBar from "@/ui/SearchBar.tsx";
import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/lib/store.ts";
import { Footer } from "@/ui/Footer.tsx";

function MainExercises() {
  const {
    collapsed,
  }: {
    collapsed: boolean;
  } = useSidebarStore((state) => state);

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
      <div
        className={cn(
          "relative mt-10 h-full w-full overflow-x-hidden",
          collapsed ? "lg:ml-[5rem]" : "ml-[20rem]",
        )}>
        <SearchBar />
        <div className={cn("no-scrollbar container w-full overflow-y-scroll pb-4")}>
          <div
            className={cn(
              "w-full",
              collapsed
                ? "lg:grid lg:grid-cols-3 2xl:grid-cols-4"
                : "lg:grid lg:grid-cols-2 2xl:grid-cols-3",
            )}>
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
        <Footer />
      </div>
    </>
  );
}

export default MainExercises;
