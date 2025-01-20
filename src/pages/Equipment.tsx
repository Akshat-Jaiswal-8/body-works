import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useEquipment } from "@/hooks/useEquipment.tsx";
import { cn } from "@/lib/utils.ts";
import { PaginationProvidor } from "@/components/PaginationProvidor.tsx";
import { SectionWrapper } from "@/components/SectionWrapper.tsx";
import { DataLoadingSkeleton } from "@/components/DataLoadingSkeleton.tsx";
import { useErrorHandler } from "@/lib/error-utils.tsx";
import { DescriptedCard } from "@/ui/DescriptedCard.tsx";

function Equipment() {
  const { equipment } = useParams();
  const [page, setPage] = useState(1);
  const { handleError } = useErrorHandler();

  const { Equipment, isLoading, error, refetch, isRefetching } = useEquipment(equipment, 9, page);

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
        <div className={cn("w-full lg:grid lg:grid-cols-2 2xl:grid-cols-3")}>
          {Object(Equipment)?.map((Equipment: IExercise) => {
            return (
              <DescriptedCard
                id={Equipment.id}
                key={Equipment.id}
                gif={Equipment.gifUrl}
                title={Equipment.title}
                blog={Equipment.blog}
              />
            );
          })}
        </div>
        <PaginationProvidor
          handlePreviousPage={handlePreviousPage}
          handleNextPage={handleNextPage}
        />
      </SectionWrapper>
    </>
  );
}

export default Equipment;
