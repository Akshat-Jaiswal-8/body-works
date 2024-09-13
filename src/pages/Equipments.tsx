import Sidebar from "@/ui/Sidebar.tsx";
import MainEquipments from "@/features/Equipments/MainEquipments.tsx";
import { cn } from "@/lib/utils";

function Equipments() {
  return (
    <>
      <div className={cn("flex max-h-svh pt-[4rem]")}>
        <Sidebar />
        <MainEquipments />
      </div>
    </>
  );
}
export default Equipments;
