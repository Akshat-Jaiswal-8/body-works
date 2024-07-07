import { useMediaQuery } from '@uidotdev/usehooks';
import Sidebar from '@/ui/Sidebar.tsx';
import MainTargetMuscles from '@/features/TargetMuscle/MainTargetMuscles.tsx';

function TargetMuscles() {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 767px)');
  return (
    <>
      <div className='w-full h-full'>
        {!isSmallDevice && <Sidebar />}
        <MainTargetMuscles />
      </div>
    </>
  );
}
export default TargetMuscles;
