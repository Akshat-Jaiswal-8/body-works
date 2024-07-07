import Sidebar from '@/ui/Sidebar.tsx';
import MainEquipments from '@/features/Equipments/MainEquipments.tsx';
import { useMediaQuery } from '@uidotdev/usehooks';

function Equipments() {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 767px)');
  return (
    <>
      <div className='w-full h-full'>
        {!isSmallDevice && <Sidebar />}
        <MainEquipments />
      </div>
    </>
  );
}
export default Equipments;
