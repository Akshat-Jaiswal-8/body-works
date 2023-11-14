import { IExercise } from '../../services/apiExercises.ts';
import ExerciseCard from './ExerciseCard.tsx';
import { useExercises } from './useExercises.tsx';
import SearchBar from '../../ui/SearchBar.tsx';

function MainExercises() {
  const limit = 9;
  const page = 1;
  const { exercises } = useExercises(limit, page);

  return (
    <>
      <div className='col-span-4 dark:bg-black my-6'>
        <SearchBar />
        <div className='grid grid-cols-3 w-full'>
          {exercises.map((exercise: IExercise) => {
            return (
              <ExerciseCard
                id={exercise.id}
                key={exercise.id}
                gif={exercise.gifUrl}
                title={exercise.title}
                blog={exercise.blog}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MainExercises;
