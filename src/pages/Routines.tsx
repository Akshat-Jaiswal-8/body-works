import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils.ts";
import RoutineCard from "@/components/RoutineCard.tsx";
import { useParams } from "react-router-dom";
import useRoutines from "@/hooks/useRoutines.tsx";

import { DataLoadingSkeleton } from "@/components/DataLoadingSkeleton.tsx";
import { useErrorHandler } from "@/lib/error-utils.tsx";
import { SectionWrapper } from "@/components/SectionWrapper.tsx";
import { PaginationProvidor } from "@/components/PaginationProvidor.tsx";

function Routines(): React.ReactNode {
  const { routineName } = useParams<{ routineName: string }>();
  const [page, setPage] = useState(1);
  const { handleError } = useErrorHandler();
  const { isLoading, routines, error, refetch, isRefetching } = useRoutines(routineName, 9, page);

  useEffect(() => {
    if (error) {
      handleError(error, refetch);
    }
  }, [error]);

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
  };

  if (isLoading || isRefetching) return <DataLoadingSkeleton />;

  return (
    <SectionWrapper>
      <div className={cn("no-scrollbar container w-full overflow-y-scroll pb-4")}>
        <div className={cn("w-full lg:grid lg:grid-cols-2 2xl:grid-cols-3")}>
          {routines?.map((eachroutine: IRoutine) => {
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
      <PaginationProvidor handleNextPage={handleNextPage} handlePreviousPage={handlePreviousPage} />
    </SectionWrapper>
  );
}

export default Routines;
