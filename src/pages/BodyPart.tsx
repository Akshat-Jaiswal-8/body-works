import Sidebar from '@/ui/Sidebar.tsx';
import MainBodyPart from '@/features/body-parts/MainBodyPart.tsx';
import { useMediaQuery } from '@uidotdev/usehooks';

function BodyPart() {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 767px)');

  return (
    <>
      <div className='h-full'>
        {!isSmallDevice && <Sidebar />}
        <MainBodyPart />
      </div>
    </>
  );
}
export default BodyPart;
