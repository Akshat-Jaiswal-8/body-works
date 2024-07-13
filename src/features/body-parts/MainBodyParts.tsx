import { useBodyParts } from './useBodyParts.tsx';
import { IBodyPart } from '@/services/apiBodyParts.ts';
import BodyPartsCard from './BodyPartsCard.tsx';
import Spinner from '@/ui/Spinner.tsx';
import Error from '@/pages/Error.tsx';

function MainBodyParts() {
  const { isLoading, bodyParts, error } = useBodyParts();

  if (isLoading) return <Spinner />;
  if (error) return <Error />;

  return (
    <>
      <div className='md:mx-12 md:w-[calc(100vw-20rem)] md:ml-[19.5rem] mt-[80px] my-6'>
        {/*<SearchBar />*/}
        <div className='grid lg:grid-cols-2 xl:grid-cols-3 mb-10 w-full'>
          {bodyParts.map((bodyPart: IBodyPart) => {
            return <BodyPartsCard key={bodyPart.bodyPart} name={bodyPart.bodyPart} image={bodyPart.imageUrl} />;
          })}
        </div>
      </div>
    </>
  );
}

export default MainBodyParts;
