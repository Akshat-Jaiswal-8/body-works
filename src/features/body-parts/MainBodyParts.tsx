import { useBodyParts } from './useBodyParts.tsx';
import { IBodyPart } from '@/services/apiBodyParts.ts';
import BodyPartsCard from './BodyPartsCard.tsx';
import SearchBar from '../../ui/SearchBar.tsx';
import Spinner from '@/ui/Spinner.tsx';
import Error from '@/pages/Error.tsx';

function MainBodyParts() {
  const { isLoading, bodyParts, error } = useBodyParts();

  if (isLoading) return <Spinner />;
  if (error) return <Error />;

  return (
    <>
      <div className='w-[calc(100vw-20rem)] mt-[80px] ml-[20rem] my-6'>
        <SearchBar />
        <div className='grid grid-cols-3 gap-8 mx-12 mt-10'>
          {bodyParts.map((bodyPart: IBodyPart) => {
            return <BodyPartsCard key={bodyPart.bodyPart} name={bodyPart.bodyPart} image={bodyPart.imageUrl} />;
          })}
        </div>
      </div>
    </>
  );
}

export default MainBodyParts;
