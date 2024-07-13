import { useRoutinesCategory } from './useRoutinesCategory.tsx';
import RoutineCategoryCard from './RoutineCategoryCard.tsx';
import Spinner from '@/ui/Spinner.tsx';
import Error from '@/pages/Error.tsx';

function MainRoutineCategory() {
  const { routineCategory, isLoading, error } = useRoutinesCategory();
  if (isLoading) return <Spinner />;
  if (error) return <Error />;

  return (
    <>
      <div className='md:mx-12 md:w-[calc(100vw-20rem)] md:ml-[19.5rem] mt-[80px] my-6'>
        {/*<SearchBar />*/}
        <div className='grid lg:grid-cols-2 xl:grid-cols-3 mb-10 w-full'>
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
