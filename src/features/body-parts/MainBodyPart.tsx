import SearchBar from '../../ui/SearchBar.tsx';
import BodyPartCard from './bodyPartCard.tsx';
import { IExercise } from '../../services/apiExercises.ts';

function MainBodyPart({ bodyPart }: { bodyPart: IExercise | undefined }) {
  return (
    <>
      <div className='col-span-4 dark:bg-black my-6'>
        <SearchBar />
        <div className='grid grid-cols-3 gap-5'>
          {Object(bodyPart)?.map((bodyPart: IExercise) => {
            return (
              <BodyPartCard
                id={bodyPart.id}
                key={bodyPart.id}
                gif={bodyPart.gifUrl}
                title={bodyPart.title}
                blog={bodyPart.blog}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MainBodyPart;
