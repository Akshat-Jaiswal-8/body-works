// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import SearchBar from '../../ui/SearchBar.tsx';
import { useRoutinesCategory } from './useRoutinesCategory.tsx';
import RoutineCategoryCard from './RoutineCategoryCard.tsx';

function MainRoutineCategory() {
  const { routineCategory } = useRoutinesCategory();
  return (
    <>
      <div className='col-span-4 dark:bg-black my-6'>
        <SearchBar />
        <div className='grid grid-cols-3'>
          {routineCategory.map((routineCategory) => {
            return (
              <RoutineCategoryCard
                key={routineCategory.title}
                title={routineCategory.title}
                imageUrl={routineCategory.imageUrl}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MainRoutineCategory;
