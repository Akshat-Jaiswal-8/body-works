import { IExercise } from '@/services/apiExercises.ts';
import EquipmentCard from './EquipmentCard.tsx';
import Spinner from '@/ui/Spinner.tsx';
import Error from '@/pages/Error.tsx';
import { useEquipment } from '@/features/Equipments/useEquipment.tsx';
import { useParams } from 'react-router-dom';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination.tsx';
import { useState } from 'react';

function MainEquipment() {
  const { equipment } = useParams();
  const [page, setPage] = useState(1);
  const limit = 9;
  const {
    Equipment,
  }: {
    Equipment: IExercise | undefined;
  } = useEquipment(equipment, limit, page);

  const {
    isLoading,
    error,
  }: {
    isLoading: boolean;
    error: Error | null;
  } = useEquipment(equipment, limit, page);

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
          {Object(Equipment)?.map((Equipment: IExercise) => {
            return (
              <EquipmentCard
                id={Equipment.id}
                key={Equipment.id}
                gif={Equipment.gifUrl}
                title={Equipment.title}
                blog={Equipment.blog}
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

export default MainEquipment;
