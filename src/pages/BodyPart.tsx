import { PaginationProvidor } from "@/components/PaginationProvidor.tsx";
import { useEffect, useState } from "react";
import { useBodyPart } from "@/hooks/useBodyPart.tsx";
import { DataLoadingSkeleton } from "@/components/DataLoadingSkeleton.tsx";
import { useParams } from "react-router-dom";
import { useErrorHandler } from "@/lib/error-utils.tsx";
import { SectionWrapper } from "@/components/SectionWrapper.tsx";
import { DescriptedCard } from "@/ui/DescriptedCard.tsx";

function BodyPart() {
  const [page, setPage] = useState(1);
  const { bodypart } = useParams();
  const { handleError } = useErrorHandler();

  const { isLoading, bodyPart, error, refetch, isRefetching } = useBodyPart(bodypart, 9, page);

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
    <>
      <SectionWrapper>
        <div className="mb-10 grid w-full lg:grid-cols-2 xl:grid-cols-3">
          {Object(bodyPart)?.map((bodyPart: IExercise) => {
            return (
              <DescriptedCard
                id={bodyPart.id}
                key={bodyPart.id}
                gif={bodyPart.gifUrl}
                title={bodyPart.title}
                blog={bodyPart.blog}
              />
            );
          })}
        </div>
        <PaginationProvidor
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
        />
      </SectionWrapper>
    </>
  );
}

export default BodyPart;
