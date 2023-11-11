// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import TargetMuscleCard from './TargetMuscleCard.tsx';
import { useTargetMuscle } from './useTargetMuscle.tsx';
import { ITargetMuscle } from '../../services/apiTargetMuscle.ts';
import SearchBar from '../../ui/SearchBar.tsx';

function MainTargetMuscle() {
  const { targetMuscle } = useTargetMuscle();
  return (
    <SearchBar>
      <div className='grid grid-cols-3 gap-8 mx-12 mt-10'>
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
    </SearchBar>
  );
}

export default MainTargetMuscle;
