// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import TargetMuscleCard from './TargetMuscleCard.tsx';
import { useTargetMuscle } from './useTargetMuscle.tsx';
import { ITargetMuscle } from '../../services/apiTargetMuscle.ts';
import SearchBar from '../../ui/SearchBar.tsx';

function MainTargetMuscle() {
  const { targetMuscle } = useTargetMuscle();
  return (
    <>
      <div className='col-span-4 dark:bg-black my-6'>
        <SearchBar />
        <div className='grid grid-cols-3 w-full gap-5'>
          {targetMuscle.map((targetMuscle: ITargetMuscle) => {
            return (
              <TargetMuscleCard
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

export default MainTargetMuscle;
