// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useParams } from 'react-router-dom';
import RoutineCard from './RoutineCard.tsx';
import useRoutine from './useRoutines.tsx';
import Spinner from '../../ui/Spinner.tsx';
import SearchBar from '../../ui/SearchBar.tsx';
import Error from '@/pages/Error.tsx';

export interface IRoutine {
  category: string[];
  routine: {
    routine_title: string;
    routine_description: string;
    routine_imageUrl: string;
    workout_plan: { heading: string; day_plan: string }[];
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

  if (isLoading) return <Spinner />;
  if (error) return <Error />;

  return (
    <>
      <div className='w-[calc(100vw-20rem)] mt-[80px] ml-[20rem] my-6'>
        <SearchBar />
        <div className='grid grid-cols-3 gap-5'>
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
