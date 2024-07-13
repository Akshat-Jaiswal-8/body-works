import { useParams } from 'react-router-dom';
import RoutineCard from './RoutineCard.tsx';
import Spinner from '@/ui/Spinner.tsx';
import Error from '@/pages/Error.tsx';
import useRoutines from './useRoutines.tsx';
import { useState } from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination.tsx';

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
  const { routineName } = useParams<{ routineName?: string }>();
  const searchName: string = (routineName ?? 'Workouts for men').replace(/ /g, '%20');
  const [page, setPage] = useState(1);
  const limit = 9;

  const { isLoading, routines, error } = useRoutines({ searchName }, limit, page);

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
  };

  if (isLoading) return <Spinner />;
  if (error) return <Error />;

  return (
    <>
      <div className='md:mx-12 md:w-[calc(100vw-20rem)] md:ml-[19.5rem] mt-[80px] my-6'>
        {/*<SearchBar />*/}
        <div className='grid lg:grid-cols-2 xl:grid-cols-3 mb-10 w-full'>
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
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious onClick={handlePreviousPage} />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext onClick={handleNextPage} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
}

export default MainRoutines;
