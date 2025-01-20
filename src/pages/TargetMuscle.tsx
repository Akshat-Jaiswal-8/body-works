import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTargetMuscle } from "@/hooks/useTargetMuscle.tsx";
import { PaginationProvidor } from "@/components/PaginationProvidor.tsx";
import { SectionWrapper } from "@/components/SectionWrapper.tsx";
import { DescriptedCard } from "@/ui/DescriptedCard.tsx";
import { useErrorHandler } from "@/lib/error-utils.tsx";
import { DataLoadingSkeleton } from "@/components/DataLoadingSkeleton.tsx";

function TargetMuscle() {
  const { targetMuscle } = useParams();
  const [page, setPage] = useState(1);
  const { handleError } = useErrorHandler();

  const { TargetMuscle, isLoading, error, refetch, isRefetching } = useTargetMuscle(
    targetMuscle,
    9,
    page,
  );

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };
  const handlePreviousPage = () => {
    setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
  };

  useEffect(() => {
    if (error) {
      handleError(error, refetch);
    }
  }, [error]);

  if (isLoading || isRefetching) return <DataLoadingSkeleton />;

  return (
    <SectionWrapper>
      <div className="mb-10 grid w-full lg:grid-cols-2 xl:grid-cols-3">
        {Object(TargetMuscle)?.map((targetMuscle: IExercise) => {
          return (
            <DescriptedCard
              id={targetMuscle.id}
              key={targetMuscle.id}
              gif={targetMuscle.gifUrl}
              title={targetMuscle.title}
              blog={targetMuscle.blog}
            />
          );
        })}
      </div>
      <PaginationProvidor handleNextPage={handleNextPage} handlePreviousPage={handlePreviousPage} />
    </SectionWrapper>
  );
}

export default TargetMuscle;
