import useRoutine from './useRoutine.tsx';
import { useParams } from 'react-router-dom';
import Spinner from '../../ui/Spinner.tsx';
import Error from '../../pages/Error.tsx';
import Sidebar from '../../ui/Sidebar.tsx';

import MainRoutineContent from './MainRoutineContent.tsx';
import { IRoutine } from '../routines/MainRoutines.tsx';

function Routine() {
  const { id: routineId } = useParams();
  const { isLoading, routine, error }: { isLoading: boolean; routine: IRoutine; error: Error | null } = useRoutine({
    routineId,
  });
  if (isLoading) return <Spinner />;
  if (error) return <Error />;

  return (
    <>
      <div className='h-full'>
        <Sidebar />
        <MainRoutineContent routine={routine.routine} category={routine.category} id={routine.id} />
        <div className='col-span-5'></div>
      </div>
    </>
  );
}

export default Routine;
