import Sidebar from '../ui/Sidebar.tsx';
import MainExerciseContent from '../features/Exercise/MainExerciseContent.tsx';
import { useMediaQuery } from '@uidotdev/usehooks';

const Exercise = () => {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 767px)');

  return (
    <>
      <div className='h-full'>
        {!isSmallDevice && <Sidebar />}
        <MainExerciseContent />
      </div>
    </>
  );
};

export default Exercise;
