import Sidebar from "../ui/Sidebar.tsx";
import MainEquipment from "../features/Equipments/MainEquipment.tsx";

function Equipment() {
  return (
    <>
      <div className={"flex max-h-svh pt-[4rem]"}>
        <Sidebar />
        <MainEquipment />
      </div>
    </>
  );
}

export default Equipment;
