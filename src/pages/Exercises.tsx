import { useExercises } from '../features/Exercises/useExercises.tsx';
import Spinner from '../ui/Spinner.tsx';
import Error from './Error.tsx';
import Sidebar from '../ui/Sidebar.tsx';
import MainExercises from '../features/Exercises/MainExercises.tsx';
import Footer from '../ui/Footer.tsx';
import Navbar from '../ui/Navbar.tsx';

function Exercises() {
  const { isLoading, error } = useExercises();

  if (isLoading) return <Spinner />;
  if (error) return <Error />;

  return (
    <>
      <Navbar />
      <div className='dark:bg-black grid grid-cols-5 h-full'>
        <Sidebar />
        <MainExercises />
      </div>
      <Footer />
    </>
  );
}
export default Exercises;
