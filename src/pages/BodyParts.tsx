import Sidebar from '@/ui/Sidebar.tsx';
import MainBodyParts from '@/features/body-parts/MainBodyParts.tsx';
import { useMediaQuery } from '@uidotdev/usehooks';

function BodyParts() {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 767px)');
  return (
    <>
      <div className='h-full'>
        {!isSmallDevice && <Sidebar />}
        <MainBodyParts />
      </div>
    </>
  );
}
export default BodyParts;
