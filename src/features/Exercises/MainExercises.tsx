import { IExercise } from '@/services/apiExercises.ts';
import { ExerciseCard } from './ExerciseCard.tsx';
import { useExercises } from './useExercises.tsx';
import SearchBar from '../../ui/SearchBar.tsx';
import Spinner from '@/ui/Spinner.tsx';
import Error from '@/pages/Error.tsx';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination.tsx';

function MainExercises() {
  const limit = 9;
  const page = 1;
  const { exercises } = useExercises(limit, page);

  const { isLoading, error } = useExercises();
  if (isLoading) return <Spinner />;
  if (error) return <Error />;

  return (
    <>
      <div className='w-[calc(100vw-20rem)] mt-[80px] ml-[20rem] my-6'>
        <SearchBar />
        <div className='grid grid-cols-3 mb-10 w-full'>
          {exercises.map((exercise: IExercise) => {
            return (
              <ExerciseCard
                id={exercise.id}
                key={exercise.id}
                gif={exercise.gifUrl}
                title={exercise.title}
                blog={exercise.blog}
              />
            );
          })}
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href='#' />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href='#'>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href='#' isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href='#'>3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href='#' />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
}

export default MainExercises;
