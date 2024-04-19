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
      <div className='h-full '>
        <Sidebar />
        <MainRoutineCategory />
        <div className='col-span-5'></div>
      </div>
    </>
  );
}
export default RoutineCategory;
