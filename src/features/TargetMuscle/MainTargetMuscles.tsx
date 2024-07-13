import TargetMusclesCard from './TargetMusclesCard.tsx';
import { useTargetMuscles } from './useTargetMuscles.tsx';
import { ITargetMuscles } from '@/services/apiTargetMuscles.ts';
import Spinner from '@/ui/Spinner.tsx';
import Error from '@/pages/Error.tsx';

function MainTargetMuscles() {
  const { isLoading, targetMuscle, error } = useTargetMuscles();

  if (isLoading) return <Spinner />;
  if (error) return <Error />;
  return (
    <>
      <div className='md:mx-12 md:w-[calc(100vw-20rem)] md:ml-[19.5rem] mt-[80px] my-6'>
        {/*<SearchBar />*/}
        <div className='grid lg:grid-cols-2 xl:grid-cols-3 mb-10 w-full'>
          {targetMuscle.map((targetMuscle: ITargetMuscles) => {
            return (
              <TargetMusclesCard
                key={targetMuscle.targetMuscle}
                name={targetMuscle.targetMuscle}
                image={targetMuscle.imageUrl}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MainTargetMuscles;
