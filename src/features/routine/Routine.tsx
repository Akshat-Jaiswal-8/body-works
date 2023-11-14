import useRoutine from './useRoutine.tsx';
import { useParams } from 'react-router-dom';
import Spinner from '../../ui/Spinner.tsx';
import Error from '../../pages/Error.tsx';

function Routine() {
  const { id: routineId } = useParams();
  const { isLoading, routine, error } = useRoutine({ routineId });
  if (isLoading) return <Spinner />;
  if (error) return <Error />;

  return <div className='text-white'>{routine.id}</div>;
}

export default Routine;
