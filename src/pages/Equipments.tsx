import useEquipments from "../hooks/useEquipments.tsx";
import { SectionWrapper } from "@/components/SectionWrapper.tsx";
import { Card } from "@/ui/Card.tsx";
import { useErrorHandler } from "@/lib/error-utils.tsx";
import { useEffect } from "react";
import { DataLoadingSkeleton } from "@/components/DataLoadingSkeleton.tsx";

function Equipments() {
  const { equipments, isLoading, error, refetch, isRefetching } = useEquipments();
  const { handleError } = useErrorHandler();

  useEffect(() => {
    if (error) {
      handleError(error, refetch);
    }
  }, [error]);

  if (isLoading || isRefetching) return <DataLoadingSkeleton />;

  return (
    <SectionWrapper>
      <div className={"no-scrollbar container w-full overflow-y-scroll pb-4"}>
        <div className={"w-full lg:grid lg:grid-cols-2 2xl:grid-cols-3"}>
          {equipments?.data.map((equipment: IEquipment) => {
            return (
              <Card
                key={equipment.equipment}
                name={equipment.equipment}
                image={equipment.imageUrl}
                path={"equipments"}
              />
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Equipments;
