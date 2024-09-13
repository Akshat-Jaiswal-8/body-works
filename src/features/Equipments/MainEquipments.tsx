import { useEquipments } from "./useEquipments.tsx";
import { IEquipments } from "@/services/apiEquipments.ts";
import Spinner from "@/ui/Spinner.tsx";
import Error from "@/pages/Error.tsx";
import { EquipmentsCard } from "@/features/Equipments/EquipmentsCard.tsx";
import { cn } from "@/lib/utils";
import SearchBar from "@/ui/SearchBar.tsx";
import { useSidebarStore } from "@/lib/store.ts";
import { Footer } from "@/ui/Footer.tsx";

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
            collapsed
              ? "lg:grid lg:grid-cols-3 2xl:grid-cols-4"
              : "lg:grid lg:grid-cols-2 2xl:grid-cols-3",
          )}>
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
      <Footer />
    </div>
  );
}

export default MainEquipments;
