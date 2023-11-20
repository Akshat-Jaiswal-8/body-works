import useRoutine from './useRoutine.tsx';
import { useParams } from 'react-router-dom';
import Spinner from '../../ui/Spinner.tsx';
import Error from '../../pages/Error.tsx';
import Sidebar from '../../ui/Sidebar.tsx';

import MainRoutineContent from './MainRoutineContent.tsx';
import { IRoutine } from '../routines/MainRoutines.tsx';
import Footer from '../../ui/Footer.tsx';

function Routine() {
  const { id: routineId } = useParams();
  const {
    isLoading,
    routine,
    error,
  }: { isLoading: boolean; routine: IRoutine; error: Error | null } =
    useRoutine({
      routineId,
    });
  if (isLoading) return <Spinner />;
  if (error) return <Error />;

  return (
    <>
      {/*<Navbar />*/}
      <div className='grid grid-cols-5 h-[87vh]'>
        <Sidebar />
        <MainRoutineContent
          routine={routine.routine}
          category={routine.category}
          id={routine.id}
        />
        <div className='col-span-5'>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Routine;
