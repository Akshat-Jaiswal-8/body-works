import { useParams } from "react-router-dom";
import RoutineCard from "./RoutineCard.tsx";
import Spinner from "@/ui/Spinner.tsx";
import Error from "@/pages/Error.tsx";
import useRoutines from "./useRoutines.tsx";
import React, { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination.tsx";
import { cn } from "@/lib/utils.ts";
import SearchBar from "@/ui/SearchBar.tsx";
import { useSidebarStore } from "@/lib/store.ts";
import { Footer } from "@/ui/Footer.tsx";

export interface IRoutine {
  category: string[];
  routine: {
    routine_title: string;
    routine_description: string;
    routine_imageUrl: string;
    workout_plan: { heading: string; day_plan: string }[];
    workout_summary: {
      MainGoal: string;
      WorkoutType: string;
      TrainingLevel: string;
      ProgramDuration: string;
      DaysPerWeek: number;
      TimePerWorkout: string;
      EquipmentRequired: string;
      TargetGender: string;
    };
  };
  id: number;
}
function MainRoutines(): React.ReactNode {
  const {
    collapsed,
  }: {
    collapsed: boolean;
  } = useSidebarStore((state) => state);
  const { routineName } = useParams<{ routineName?: string }>();
  const searchName: string = (routineName ?? "Workouts for men").replace(/ /g, "%20");
  const [page, setPage] = useState(1);
  const limit = 9;

  const { isLoading, routines, error } = useRoutines({ searchName }, limit, page);

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
              collapsed ? "lg:grid lg:grid-cols-3" : "lg:grid lg:grid-cols-2",
            )}>
            {routines.map((eachroutine: IRoutine) => {
              return (
                <RoutineCard
                  key={eachroutine.id}
                  id={eachroutine.id}
                  routine_title={eachroutine.routine.routine_title}
                  routine_description={eachroutine.routine.routine_description}
                  routine_imageUrl={eachroutine.routine.routine_imageUrl}
                />
              );
            })}
          </div>
        </div>
        <Pagination className="my-4">
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

export default MainRoutines;
