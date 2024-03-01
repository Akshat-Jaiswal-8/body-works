// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import TargetMusclesCard from './TargetMusclesCard.tsx';
import { useTargetMuscles } from './useTargetMuscles.tsx';
import { ITargetMuscles } from '../../services/apiTargetMuscles.ts';
import SearchBar from '../../ui/SearchBar.tsx';

function MainTargetMuscles() {
  const { targetMuscle } = useTargetMuscles();
  return (
    <>
      <div className='col-span-4 dark:bg-black my-6'>
        <SearchBar />
        <div className='grid grid-cols-3 w-full gap-5'>
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
