import Spinner from '../ui/Spinner.tsx';
import Error from './Error.tsx';
import Sidebar from '../ui/Sidebar.tsx';
import MainRoutineCategory from '../features/routine-category/MainRoutineCategory.tsx';
import { useRoutinesCategory } from '../features/routine-category/useRoutinesCategory.tsx';
import Footer from '../ui/Footer.tsx';
import Navbar from '../ui/Navbar.tsx';

function RoutineCategory() {
  const { isLoading, error } = useRoutinesCategory();

  if (isLoading) return <Spinner />;
  if (error) return <Error />;

  return (
    <>
      <Navbar />
      <div className='grid grid-cols-5 h-[87vh] '>
        <Sidebar />
        <MainRoutineCategory />
        <div className='col-span-5'>
          <Footer />
        </div>
      </div>
    </>
  );
}
export default RoutineCategory;
