import SearchBar from '../../ui/SearchBar.tsx';
import { IExercise } from '../../services/apiExercises.ts';
import TargetMuscleCard from './TargetMuscleCard.tsx';

function MainTargetMuscle({
  targetMuscle,
}: {
  targetMuscle: IExercise | undefined;
}) {
  return (
    <>
      <div className='col-span-4 dark:bg-black my-6'>
        <SearchBar />
        <div className='grid grid-cols-3 gap-5'>
          {Object(targetMuscle)?.map((targetMuscle: IExercise) => {
            return (
              <TargetMuscleCard
                id={targetMuscle.id}
                key={targetMuscle.id}
                gif={targetMuscle.gifUrl}
                title={targetMuscle.title}
                blog={targetMuscle.blog}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MainTargetMuscle;
