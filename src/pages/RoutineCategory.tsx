import Sidebar from '@/ui/Sidebar.tsx';
import MainRoutineCategory from '@/features/routine-category/MainRoutineCategory.tsx';
import { useMediaQuery } from '@uidotdev/usehooks';

function RoutineCategory() {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 767px)');

  return (
    <>
      <div className='h-full '>
        {!isSmallDevice && <Sidebar />}
        <MainRoutineCategory />
      </div>
    </>
  );
}
export default RoutineCategory;
