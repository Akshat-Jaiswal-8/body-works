import SearchBar from '../../ui/SearchBar.tsx';
import BodyPartCard from './bodyPartCard.tsx';
import { IExercise } from '@/services/apiExercises.ts';
import Spinner from '@/ui/Spinner.tsx';
import Error from '@/pages/Error.tsx';
import { useBodyPart } from '@/features/body-parts/useBodyPart.tsx';
import { useParams } from 'react-router-dom';

function MainBodyPart() {
  const { bodypart } = useParams();

  const {
    isLoading,
    bodyPart,
    error,
  }: {
    isLoading: boolean;
    bodyPart: IExercise | undefined;
    error: Error | null;
  } = useBodyPart(bodypart);
  if (isLoading) return <Spinner />;
  if (error) return <Error />;

  return (
    <>
      <div className='w-[calc(100vw-20rem)] mt-[80px] ml-[20rem] my-6'>
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
