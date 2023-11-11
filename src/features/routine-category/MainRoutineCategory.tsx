// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import SearchBar from '../../ui/SearchBar.tsx';
import { useRoutines } from './useRoutines.tsx';
import { IRoutineCategory } from '../../services/apiRoutineCategory.ts';
import RoutineCategoryCard from './RoutineCategoryCard.tsx';

function MainRoutineCategory() {
  const { routineCategory } = useRoutines();
  return (
    <SearchBar>
      <div className='grid grid-cols-3 gap-8 mx-12 mt-10'>
        {routineCategory.map((routineCategory: IRoutineCategory) => {
          return (
            <RoutineCategoryCard
              key={routineCategory.title}
              name={routineCategory.title}
              image={routineCategory.imageUrl}
            />
          );
        })}
      </div>
    </SearchBar>
  );
}

export default MainRoutineCategory;
