import MainRoutines from '@/features/routines/MainRoutines.tsx';
import Sidebar from '@/ui/Sidebar.tsx';
import { useMediaQuery } from '@uidotdev/usehooks';

function Routines() {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 767px)');

  return (
    <>
      <div className='h-full'>
        {!isSmallDevice && <Sidebar />}
        <MainRoutines />
      </div>
    </>
  );
}

export default Routines;
