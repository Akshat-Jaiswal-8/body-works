// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import TargetMusclesCard from './TargetMusclesCard.tsx';
import { useTargetMuscles } from './useTargetMuscles.tsx';
import { ITargetMuscles } from '@/services/apiTargetMuscles.ts';
import SearchBar from '../../ui/SearchBar.tsx';
import Spinner from '@/ui/Spinner.tsx';
import Error from '@/pages/Error.tsx';

function MainTargetMuscles() {
  const { isLoading, targetMuscle, error } = useTargetMuscles();

  if (isLoading) return <Spinner />;
  if (error) return <Error />;
  return (
    <>
      <div className='w-[calc(100vw-20rem)] mt-[80px] ml-[20rem] my-6'>
        <SearchBar />
        <div className='grid grid-cols-3 gap-8 mx-12 mt-10'>
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
