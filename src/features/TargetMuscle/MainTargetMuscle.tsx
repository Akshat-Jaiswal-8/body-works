import SearchBar from '../../ui/SearchBar.tsx';
import { IExercise } from '@/services/apiExercises.ts';
import TargetMuscleCard from './TargetMuscleCard.tsx';
import Spinner from '@/ui/Spinner.tsx';
import Error from '@/pages/Error.tsx';
import { useTargetMuscle } from '@/features/TargetMuscle/useTargetMuscle.tsx';
import { useParams } from 'react-router-dom';

function MainTargetMuscle({ TargetMuscle }: { TargetMuscle: IExercise | undefined }) {
  const { targetMuscle } = useParams();

  const { isLoading, error } = useTargetMuscle(targetMuscle);
  if (isLoading) return <Spinner />;
  if (error) return <Error />;

  return (
    <>
      <div className='w-[calc(100vw-20rem)] mt-[80px] ml-[20rem] my-6'>
        <SearchBar />
        <div className='grid grid-cols-3 gap-5'>
          {Object(TargetMuscle)?.map((targetMuscle: IExercise) => {
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
