// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useParams } from 'react-router-dom';
import RoutineCard from './RoutineCard.tsx';
import useRoutine from './useRoutines.tsx';
import Spinner from '../../ui/Spinner.tsx';
import SearchBar from '../../ui/SearchBar.tsx';

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
function MainRoutines() {
  const { routineName } = useParams();
  const searchName: string | undefined = routineName?.replace(/ /g, '%20');
  const { isLoading, routines, error } = useRoutine({ searchName });

  if (isLoading)
    return (
      <div className='text-center mx-auto w-full col-span-4'>
        <Spinner />
      </div>
    );
  if (error) {
    return <Error />;
  }

  return (
    <>
      <div className='col-span-4 dark:bg-black my-6'>
        <SearchBar />
        <div className='grid grid-cols-3 w-full'>
          {routines.map((eachroutine: IRoutine) => {
            return (
              <RoutineCard
                key={eachroutine.id}
                id={eachroutine.id}
                routine_title={eachroutine.routine.routine_title}
                routine_description={eachroutine.routine.routine_description}
                routine_imageUrl={eachroutine.routine.routine_imageUrl}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MainRoutines;
