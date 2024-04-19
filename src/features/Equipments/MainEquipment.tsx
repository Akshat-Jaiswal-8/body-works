import SearchBar from '../../ui/SearchBar.tsx';
import { IExercise } from '../../services/apiExercises.ts';
import EquipmentCard from './EquipmentCard.tsx';
import Spinner from '@/ui/Spinner.tsx';
import Error from '@/pages/Error.tsx';
import { useEquipment } from '@/features/Equipments/useEquipment.tsx';
import { useParams } from 'react-router-dom';

function MainEquipment({ Equipment }: { Equipment: IExercise | undefined }) {
  const { equipment } = useParams();

  const {
    isLoading,
    error,
  }: {
    isLoading: boolean;
    error: Error | null;
  } = useEquipment(equipment);
  if (isLoading) return <Spinner />;
  if (error) return <Error />;

  return (
    <>
      <div className='w-[calc(100vw-20rem)] mt-[80px] ml-[20rem] my-6'>
        <SearchBar />
        <div className='grid grid-cols-3 gap-5'>
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
      </div>
    </>
  );
}

export default MainEquipment;
