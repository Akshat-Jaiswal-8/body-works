import { useParams } from 'react-router-dom';
import useRoutine from './useRoutine.tsx';
import Spinner from '../../ui/Spinner.tsx';

function Routines() {
  const { routineName } = useParams();
  const searchName: string | undefined = routineName?.replace(/ /g, '%20');
  const { isLoading, routine, error } = useRoutine({ searchName });
  if (isLoading) return <Spinner />;
  if (error) throw new Error(error);
  return (
    <div className='text-white'>
      {routine?.map((eachroutine) => eachroutine.id)}
    </div>
  );
}

export default Routines;
