import { cn } from "@/lib/utils.ts";
import { SectionWrapper } from "@/components/SectionWrapper.tsx";
import { useRoutinesCategory } from "@/hooks/useRoutinesCategory.tsx";
import { Card } from "@/ui/Card.tsx";
import { DataLoadingSkeleton } from "@/components/DataLoadingSkeleton.tsx";
import { useEffect } from "react";
import { useErrorHandler } from "@/lib/error-utils.tsx";

function RoutineCategory() {
  const { routineCategory, isLoading, error, refetch, isRefetching } = useRoutinesCategory();
  const { handleError } = useErrorHandler();

  useEffect(() => {
    if (error) {
      handleError(error, refetch);
    }
  }, [error]);

  if (isLoading || isRefetching) return <DataLoadingSkeleton />;

  return (
    <SectionWrapper>
      <div className={cn("no-scrollbar container w-full overflow-y-scroll pb-4")}>
        <div className={cn("w-full lg:grid lg:grid-cols-2 2xl:grid-cols-3")}>
          {routineCategory?.map((routineCategory: { title: string; imageUrl: string }) => {
            return (
              <Card
                key={routineCategory.title}
                name={routineCategory.title}
                image={routineCategory.imageUrl}
                searchName={routineCategory.title}
                path={"routines"}
              />
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}

export default RoutineCategory;
