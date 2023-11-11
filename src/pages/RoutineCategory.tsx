import Spinner from '../ui/Spinner.tsx';
import Error from './Error.tsx';
import Navbar from '../ui/Navbar.tsx';
import Sidebar from '../ui/Sidebar.tsx';
import MainRoutineCategory from '../features/routine-category/MainRoutineCategory.tsx';
import { useRoutines } from '../features/routine-category/useRoutines.tsx';

function RoutineCategory() {
  const { isLoading, error } = useRoutines();

  if (isLoading) return <Spinner />;
  if (error) return <Error />;

  return (
    <>
      <Navbar />
      <div className='grid grid-cols-5 h-[87vh] '>
        <Sidebar />
        <MainRoutineCategory />
      </div>
    </>
  );
}
export default RoutineCategory;
