import Sidebar from '../ui/Sidebar.tsx';
import MainEquipment from '../features/Equipments/MainEquipment.tsx';

function Equipment() {
  return (
    <>
      <div className='h-full'>
        <Sidebar />
        <MainEquipment />
      </div>
    </>
  );
}
export default Equipment;
