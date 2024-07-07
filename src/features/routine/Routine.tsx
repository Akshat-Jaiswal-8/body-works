import Sidebar from '../../ui/Sidebar.tsx';

import MainRoutineContent from './MainRoutineContent.tsx';
import { useMediaQuery } from '@uidotdev/usehooks';

function Routine() {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 767px)');

  return (
    <>
      <div className='h-full'>
        {!isSmallDevice && <Sidebar />}
        <MainRoutineContent />
      </div>
    </>
  );
}

export default Routine;
