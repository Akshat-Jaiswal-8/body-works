import { useEquipments } from "./useEquipments.tsx";
import { IEquipments } from "@/services/apiEquipments.ts";
import Spinner from "@/ui/Spinner.tsx";
import Error from "@/pages/Error.tsx";
import { EquipmentsCard } from "@/features/Equipments/EquipmentsCard.tsx";
import { cn } from "@/utils/cn.ts";
import SearchBar from "@/ui/SearchBar.tsx";
import { useSidebarStore } from "@/lib/store.ts";

function MainEquipments() {
  const {
    collapsed,
  }: {
    collapsed: boolean;
  } = useSidebarStore((state) => state);

  const { equipments } = useEquipments();
  const { isLoading, error } = useEquipments();

  if (isLoading) return <Spinner />;
  if (error) return <Error />;

  return (
    <>
      <div
        className={cn(
          "xs:mx-auto sm:mx-12  ",
          collapsed
            ? "col-span-full"
            : "col-span-4 xs:mt-[120px] md:mt-[100px]",
        )}
      >
        <SearchBar />
        <div className="container grid lg:grid-cols-2 xl:grid-cols-4 mb-10 w-full">
          {equipments.map((equipment: IEquipments) => {
            return (
              <EquipmentsCard
                key={equipment.equipment}
                name={equipment.equipment}
                image={equipment.imageUrl}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MainEquipments;
