import Spinner from '../ui/Spinner.tsx';
import Error from './Error.tsx';
import Sidebar from '../ui/Sidebar.tsx';
import MainRoutineCategory from '../features/routine-category/MainRoutineCategory.tsx';
import { useRoutinesCategory } from '../features/routine-category/useRoutinesCategory.tsx';

function RoutineCategory() {
  const { isLoading, error } = useRoutinesCategory();

  if (isLoading) return <Spinner />;
  if (error) return <Error />;

  return (
    <>
      <div className='grid grid-cols-5 h-[87vh] '>
        <Sidebar />
        <MainRoutineCategory />
      </div>
    </>
  );
}
export default RoutineCategory;
