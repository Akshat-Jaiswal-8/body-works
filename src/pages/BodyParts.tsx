import { SectionWrapper } from "@/components/SectionWrapper.tsx";
import { useBodyParts } from "@/hooks/useBodyParts.tsx";
import { Card } from "@/ui/Card.tsx";
import { useErrorHandler } from "@/lib/error-utils.tsx";
import { useEffect } from "react";
import { DataLoadingSkeleton } from "@/components/DataLoadingSkeleton.tsx";

function BodyParts() {
  const { isLoading, bodyParts, error, isRefetching, refetch } = useBodyParts();

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
    <>
      <SectionWrapper>
        <div className={"no-scrollbar container w-full overflow-y-auto pb-4"}>
          <div className={"w-full lg:grid lg:grid-cols-2 2xl:grid-cols-3"}>
            {bodyParts?.data.map((bodyPart: IBodyPart) => {
              return (
                <Card
                  key={bodyPart.bodyPart}
                  name={bodyPart.bodyPart}
                  image={bodyPart.imageUrl}
                  path={"body-parts"}
                />
              );
            })}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}

export default BodyParts;
