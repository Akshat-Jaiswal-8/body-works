// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import MainRoutines from '../features/routines/MainRoutines.tsx';
import Sidebar from '../ui/Sidebar.tsx';

function Routines() {
  return (
    <>
      <div className='h-full'>
        <Sidebar />
        <MainRoutines />
      </div>
    </>
  );
}

export default Routines;
