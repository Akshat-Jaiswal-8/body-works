import Sidebar from '@/ui/Sidebar.tsx';
import MainTargetMuscle from '@/features/TargetMuscle/MainTargetMuscle.tsx';
import { useMediaQuery } from '@uidotdev/usehooks';

function TargetMuscle() {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 767px)');

  return (
    <>
      <div className='h-full'>
        {!isSmallDevice && <Sidebar />}
        <MainTargetMuscle />
      </div>
    </>
  );
}
export default TargetMuscle;
