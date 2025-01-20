import useTargetMuscles from "../hooks/useTargetMuscles.tsx";
import { cn } from "@/lib/utils.ts";
import { SectionWrapper } from "@/components/SectionWrapper.tsx";
import { Card } from "@/ui/Card.tsx";
import { useEffect } from "react";
import { useErrorHandler } from "@/lib/error-utils.tsx";
import { DataLoadingSkeleton } from "@/components/DataLoadingSkeleton.tsx";

function TargetMuscles() {
  const { isLoading, targetMuscle, error, refetch, isRefetching } = useTargetMuscles();

  const { handleError } = useErrorHandler();

  useEffect(() => {
    if (error) {
      handleError(error, refetch);
    }
  }, [error]);

  if (isLoading || isRefetching) {
    return <DataLoadingSkeleton />;
  }

  return (
    <SectionWrapper>
      <div className={cn("no-scrollbar container w-full overflow-y-scroll pb-4")}>
        <div className={cn("w-full lg:grid lg:grid-cols-2 2xl:grid-cols-3")}>
          {targetMuscle?.data.map((targetMuscle: ITargetMuscle) => {
            return (
              <Card
                name={targetMuscle.targetMuscle}
                image={targetMuscle.imageUrl}
                key={targetMuscle.targetMuscle}
                path={"target-muscle"}
              />
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}

export default TargetMuscles;
