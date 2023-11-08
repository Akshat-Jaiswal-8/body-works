import { useBodyPart } from './useBodyPart.tsx';
import { IBodyPart } from '../../services/apiBodyPart.ts';
import BodyPartCard from './BodyPartCard.tsx';
import SearchBar from '../../ui/SearchBar.tsx';

function MainBodyPart() {
  const { bodyParts } = useBodyPart();

  return (
    <SearchBar>
      <div className='grid grid-cols-3 gap-8 mx-12 mt-10'>
        {bodyParts.map(
          (bodyPart: IBodyPart) => {
            return (
              <BodyPartCard
                key={bodyPart.bodyPart}
                name={bodyPart.bodyPart}
                image={
                  bodyPart.imageUrl
                }
              />
            );
          },
        )}
      </div>
    </SearchBar>
  );
}

export default MainBodyPart;
