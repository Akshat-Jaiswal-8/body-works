import SearchBar from '../../ui/SearchBar.tsx';
import { IExercise } from '../../services/apiExercises.ts';
import EquipmentCard from './EquipmentCard.tsx';

function MainEquipment({ Equipment }: { Equipment: IExercise | undefined }) {
  return (
    <>
      <div className='col-span-4 dark:bg-black my-6'>
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
