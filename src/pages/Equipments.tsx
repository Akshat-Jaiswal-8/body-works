import Sidebar from "@/ui/Sidebar.tsx";
import MainEquipments from "@/features/Equipments/MainEquipments.tsx";
import { useMediaQuery } from "@uidotdev/usehooks";

function Equipments() {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 767px)");

  return (
    <>
      <div className="mt-[3.5rem] grid grid-cols-5 gap-4 justify-between">
        {!isSmallDevice && <Sidebar />}
        <MainEquipments />
      </div>
    </>
  );
}
export default Equipments;
