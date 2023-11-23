import Sidebar from '../ui/Sidebar.tsx';
import Footer from '../ui/Footer.tsx';
import { useParams } from 'react-router-dom';
import Error from './Error.tsx';
import Spinner from '../ui/Spinner.tsx';
import { IExercise } from '../services/apiExercises.ts';
import { useTargetMuscle } from '../features/TargetMuscle/useTargetMuscle.tsx';
import MainTargetMuscle from '../features/TargetMuscle/MainTargetMuscle.tsx';
import Navbar from '../ui/Navbar.tsx';

function TargetMuscle() {
  const { targetMuscle } = useParams();
  const {
    isLoading,
    TargetMuscle,
    error,
  }: {
    isLoading: boolean;
    TargetMuscle: IExercise | undefined;
    error: Error | null;
  } = useTargetMuscle(targetMuscle);

  if (isLoading) return <Spinner />;
  if (error) return <Error />;

  return (
    <>
      <Navbar />
      <div className='dark:bg-black grid grid-cols-5 h-full'>
        <Sidebar />
        <MainTargetMuscle targetMuscle={TargetMuscle} />
      </div>
      <Footer />
    </>
  );
}
export default TargetMuscle;
