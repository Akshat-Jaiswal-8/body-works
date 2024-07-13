import { IExercise } from '@/services/apiExercises.ts';
import TargetMuscleCard from './TargetMuscleCard.tsx';
import Spinner from '@/ui/Spinner.tsx';
import Error from '@/pages/Error.tsx';
import { useTargetMuscle } from '@/features/TargetMuscle/useTargetMuscle.tsx';
import { useParams } from 'react-router-dom';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination.tsx';
import { useState } from 'react';

function MainTargetMuscle() {
  const { targetMuscle } = useParams();
  const [page, setPage] = useState(1);
  const limit = 9;
  const {
    TargetMuscle,
  }: {
    TargetMuscle: IExercise | undefined;
  } = useTargetMuscle(targetMuscle, limit, page);

  const { isLoading, error } = useTargetMuscle(targetMuscle, limit, page);

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
          {Object(TargetMuscle)?.map((targetMuscle: IExercise) => {
            return (
              <TargetMuscleCard
                id={targetMuscle.id}
                key={targetMuscle.id}
                gif={targetMuscle.gifUrl}
                title={targetMuscle.title}
                blog={targetMuscle.blog}
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

export default MainTargetMuscle;
