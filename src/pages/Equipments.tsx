import Sidebar from '../ui/Sidebar.tsx';
import MainEquipments from '../features/Equipments/MainEquipments.tsx';

function Equipments() {
  return (
    <>
      <div className='h-full'>
        <Sidebar />
        <MainEquipments />
      </div>
    </>
  );
}
export default Equipments;
