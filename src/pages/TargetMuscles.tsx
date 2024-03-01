import Spinner from '../ui/Spinner.tsx';
import Error from './Error.tsx';
import Sidebar from '../ui/Sidebar.tsx';
import MainTargetMuscles from '../features/TargetMuscle/MainTargetMuscles.tsx';
import { useTargetMuscles } from '../features/TargetMuscle/useTargetMuscles.tsx';
import Footer from '../ui/Footer.tsx';
import Navbar from '../ui/Navbar.tsx';

function TargetMuscles() {
  const { isLoading, error } = useTargetMuscles();

  if (isLoading) return <Spinner />;
  if (error) return <Error />;

  return (
    <>
      <Navbar />
      <div className='grid grid-cols-5 h-[87vh]'>
        <Sidebar />
        <MainTargetMuscles />
        <div className='col-span-5'>
          <Footer />
        </div>
      </div>
    </>
  );
}
export default TargetMuscles;
