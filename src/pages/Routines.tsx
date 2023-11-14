// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import MainRoutines from '../features/routines/MainRoutines.tsx';
import Footer from '../ui/Footer.tsx';
import Sidebar from '../ui/Sidebar.tsx';

function Routines() {
  return (
    <>
      <div className='dark:bg-gray-950 grid grid-cols-5 h-full'>
        <Sidebar />
        <MainRoutines />
      </div>
      <Footer />
    </>
  );
}

export default Routines;
