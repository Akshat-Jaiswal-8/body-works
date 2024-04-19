import SearchBar from '../../ui/SearchBar.tsx';
import { useRoutinesCategory } from './useRoutinesCategory.tsx';
import RoutineCategoryCard from './RoutineCategoryCard.tsx';

function MainRoutineCategory() {
  const { routineCategory } = useRoutinesCategory();
  return (
    <>
      <div className='w-[calc(100vw-20rem)] mt-[80px] ml-[20rem] my-6'>
        <SearchBar />
        <div className='grid grid-cols-3 gap-8 mx-12 mt-10'>
          {routineCategory.map((routineCategory: { title: string; imageUrl: string }) => {
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
