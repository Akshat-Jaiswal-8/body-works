import Sidebar from '../ui/Sidebar.tsx';
import Footer from '../ui/Footer.tsx';
import MainBodyPart from '../features/body-parts/MainBodyPart.tsx';
import { useParams } from 'react-router-dom';
import Error from './Error.tsx';
import Spinner from '../ui/Spinner.tsx';
import { useBodyPart } from '../features/body-parts/useBodyPart.tsx';
import { IExercise } from '../services/apiExercises.ts';
import Navbar from '../ui/Navbar.tsx';

function BodyPart() {
  const { bodypart } = useParams();
  const {
    isLoading,
    bodyPart,
    error,
  }: {
    isLoading: boolean;
    bodyPart: IExercise | undefined;
    error: Error | null;
  } = useBodyPart(bodypart);
  if (isLoading) return <Spinner />;
  if (error) return <Error />;

  return (
    <>
      <Navbar />
      <div className='dark:bg-black grid grid-cols-5 h-full'>
        <Sidebar />
        <MainBodyPart bodyPart={bodyPart} />
      </div>
      <Footer />
    </>
  );
}
export default BodyPart;
