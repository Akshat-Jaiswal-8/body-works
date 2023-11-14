// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useBodyPart } from './useBodyPart.tsx';
import { IBodyPart } from '../../services/apiBodyPart.ts';
import BodyPartCard from './BodyPartCard.tsx';
import SearchBar from '../../ui/SearchBar.tsx';

function MainBodyPart() {
  const { bodyParts } = useBodyPart();

  return (
    <>
      <div className='col-span-4 dark:bg-black my-6'>
        <SearchBar />
        <div className='grid grid-cols-3 gap-5'>
          {bodyParts.map((bodyPart: IBodyPart) => {
            return (
              <BodyPartCard
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

export default MainBodyPart;
