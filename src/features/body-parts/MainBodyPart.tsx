import BodyPartCard from './bodyPartCard.tsx';
import { IExercise } from '@/services/apiExercises.ts';
import Spinner from '@/ui/Spinner.tsx';
import Error from '@/pages/Error.tsx';
import { useBodyPart } from '@/features/body-parts/useBodyPart.tsx';
import { useParams } from 'react-router-dom';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination.tsx';
import { useState } from 'react';

function MainBodyPart() {
  const { bodypart } = useParams();

  const [page, setPage] = useState(1);
  const limit = 9;

  const {
    isLoading,
    bodyPart,
    error,
  }: {
    isLoading: boolean;
    bodyPart: IExercise | undefined;
    error: Error | null;
  } = useBodyPart(bodypart, limit, page);

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
          {Object(bodyPart)?.map((bodyPart: IExercise) => {
            return (
              <BodyPartCard
                id={bodyPart.id}
                key={bodyPart.id}
                gif={bodyPart.gifUrl}
                title={bodyPart.title}
                blog={bodyPart.blog}
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

export default MainBodyPart;
