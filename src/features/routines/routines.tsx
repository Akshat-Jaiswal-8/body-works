// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useParams } from 'react-router-dom';
import useRoutine from './useRoutine.tsx';
import Spinner from '../../ui/Spinner.tsx';
import Error from '../../pages/Error.tsx';

interface IRoutine {
  category: Array<string>;
  routine: {
    routine_title: string;
    routine_description: string;
    routine_imageUrl: string;
    workout_plan: Array<{ heading: string; day_plan: string }>;
    workout_summary: {
      MainGoal: string;
      WorkoutType: string;
      TrainingLevel: string;
      ProgramDuration: string;
      DaysPerWeek: number;
      TimePerWorkout: string;
      EquipmentRequired: string;
      TargetGender: string;
    };
  };
  id: number;
}
function Routines() {
  const { routineName } = useParams();
  const searchName: string | undefined = routineName?.replace(/ /g, '%20');
  const { isLoading, routine, error } = useRoutine({ searchName });
  if (isLoading) return <Spinner />;
  if (error) {
    return <Error error={error} />;
  }

  return (
    <>
      <div className='text-black'>
        {routine?.map(
          (eachroutine: IRoutine) =>
            eachroutine.routine.workout_plan[0].heading,
        )}
      </div>
    </>
  );
}

export default Routines;
