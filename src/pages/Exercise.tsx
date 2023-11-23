import { useParams } from 'react-router-dom';
import { useExercise } from '../features/Exercise/useExercise.tsx';
import Spinner from '../ui/Spinner.tsx';
import Error from './Error.tsx';
import Sidebar from '../ui/Sidebar.tsx';
import MainExerciseContent from '../features/Exercise/MainExerciseContent.tsx';
import Footer from '../ui/Footer.tsx';
import Navbar from '../ui/Navbar.tsx';

const Exercise = () => {
  const { exerciseId } = useParams();
  const { isLoading, error } = useExercise(exerciseId);

  if (isLoading) return <Spinner />;
  if (error) return <Error />;

  return (
    <>
      <Navbar />
      <div className='grid grid-cols-5 h-[87vh]'>
        <Sidebar />
        <MainExerciseContent />
        <div className='col-span-5'>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Exercise;
