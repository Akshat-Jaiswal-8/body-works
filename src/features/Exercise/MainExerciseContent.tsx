import ExerciseHeaders from './ExerciseHeaders.tsx';
import ExerciseContent from './ExerciseContent.tsx';
import { useParams } from 'react-router-dom';
import { useExercise } from './useExercise.tsx';
import ReactPlayer from 'react-player';
import { markdownToHtml } from '../../../actions/markdown-to-html.ts';

function MainExerciseContent() {
  const { exerciseId } = useParams();
  const { exercise } =
    useExercise(exerciseId);

  const descriptionMatch: RegExpMatchArray | null =
    exercise.blog.match('Description');
  const instructionMatch: RegExpMatchArray | null =
    exercise.blog.match('Instructions');
  const beginnerVariationMatch: RegExpMatchArray | null =
    exercise.blog.match('Variations');
  const musclesWorkedMatch: RegExpMatchArray | null =
    exercise.blog.match('Muscles');
  const commonMistakesMatch: RegExpMatchArray | null =
    exercise.blog.match(
      'Common Mistakes',
    );
  const safetyPrecautionsMatch: RegExpMatchArray | null =
    exercise.blog.match(
      'Safety Precautions',
    );

  const descriptionIndex:
    | number
    | undefined =
    descriptionMatch?.index;
  const instructionIndex:
    | number
    | undefined =
    instructionMatch?.index;
  const beginnerVariationIndex:
    | number
    | undefined =
    beginnerVariationMatch?.index;
  const musclesWorkedIndex:
    | number
    | undefined =
    musclesWorkedMatch?.index;
  const commonMistakesIndex:
    | number
    | undefined =
    commonMistakesMatch?.index;
  const safetyPrecautionsIndex:
    | number
    | undefined =
    safetyPrecautionsMatch?.index;

  return (
    <>
      <div className='text-white col-span-4 w-full'>
        <div className='grid grid-cols-2 justify-center mt-16 mb-28'>
          <div className='col-span-1 text-left ml-16  py-12 px-6'>
            <div className='flex flex-col gap-8'>
              <h1 className='text-white text-left text-5xl font-bold font-montserrat'>
                {exercise.title}
              </h1>
              <ExerciseHeaders
                title={'Target Muscle'}
                content={
                  exercise.target
                }
              />
              <ExerciseHeaders
                title={'Body Part'}
                content={
                  exercise.bodyPart
                }
              />
              <ExerciseHeaders
                title={'Equipment'}
                content={
                  exercise.equipment
                }
              />
              <ExerciseHeaders
                title={'Muscle Worked'}
                content={
                  exercise[
                    'muscles worked'
                  ]
                }
              />
            </div>
          </div>
          <div className='col-span-1 items-center my-auto mx-auto'>
            <img
              alt='exercise gif'
              className=' rounded-3xl '
              src={exercise.gifUrl}
            ></img>
          </div>
        </div>
        <h1 className='text-gray-400 font-semibold text-xl ml-16 px-7'>
          Reference Images
          <span className='ml-2'>
            :
          </span>
        </h1>
        <div className='grid grid-cols-2 justify-center mb-16'>
          {exercise.images.map(
            (image: string) => (
              <div className='text-left mx-16 my-12 px-6'>
                <img
                  key={image}
                  src={image}
                  className='h-80 w-full rounded-3xl'
                  alt={'exercise image'}
                />
              </div>
            ),
          )}
        </div>
        <h1 className='text-gray-400 font-semibold text-xl ml-16 px-7'>
          Reference Videos
          <span className='ml-2'>
            :
          </span>
        </h1>
        <div className='grid grid-cols-2 justify-center mt-8 mb-16'>
          {exercise.videos.map(
            (video: string) => (
              <div className='text-left mx-16 my-12 px-6'>
                <ReactPlayer
                  key={video}
                  volume={100}
                  width='560'
                  url={video}
                  controls
                ></ReactPlayer>
              </div>
            ),
          )}
        </div>
        <div className='text-left mx-16 px-6'>
          <ExerciseContent
            title={'Description'}
            startIndex={
              descriptionIndex
                ? descriptionIndex + 12
                : undefined
            }
            endIndex={instructionIndex}
          />
          <ExerciseContent
            title={'Instructions'}
            startIndex={
              instructionIndex
                ? instructionIndex + 12
                : undefined
            }
            endIndex={
              beginnerVariationIndex
            }
          />
          <ExerciseContent
            title={'Variations'}
            startIndex={
              beginnerVariationIndex
                ? beginnerVariationIndex +
                  12
                : undefined
            }
            endIndex={
              musclesWorkedIndex
            }
          />
          <ExerciseContent
            title={'Common Mistakes'}
            startIndex={
              commonMistakesIndex
                ? commonMistakesIndex +
                  18
                : undefined
            }
            endIndex={
              safetyPrecautionsIndex
            }
          />
          <ExerciseContent
            title={'Safety Precautions'}
            startIndex={
              safetyPrecautionsIndex
                ? safetyPrecautionsIndex +
                  20
                : undefined
            }
          />
          <div
            className='[all-unset]'
            dangerouslySetInnerHTML={{
              __html: markdownToHtml(
                exercise.blog,
              ),
            }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default MainExerciseContent;
