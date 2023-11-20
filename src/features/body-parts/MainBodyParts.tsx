// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useBodyParts } from './useBodyParts.tsx';
import { IBodyPart } from '../../services/apiBodyParts.ts';
import BodyPartsCard from './BodyPartsCard.tsx';
import SearchBar from '../../ui/SearchBar.tsx';

function MainBodyParts() {
  const { bodyParts } = useBodyParts();

  return (
    <>
      <div className='col-span-4 dark:bg-black my-6'>
        <SearchBar />
        <div className='grid grid-cols-3 gap-5'>
          {bodyParts.map((bodyPart: IBodyPart) => {
            return (
              <BodyPartsCard
                key={bodyPart.bodyPart}
                name={bodyPart.bodyPart}
                image={bodyPart.imageUrl}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MainBodyParts;
