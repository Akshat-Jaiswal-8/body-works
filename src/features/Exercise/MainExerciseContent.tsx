import ExerciseHeaders from './ExerciseHeaders.tsx';
import { useParams } from 'react-router-dom';
import { useExercise } from './useExercise.tsx';
import ReactPlayer from 'react-player';
import { markdownToHtml } from '../../../actions/markdown-to-html.ts';

function MainExerciseContent() {
  const { exerciseId } = useParams();
  const { exercise } = useExercise(exerciseId);

  return (
    <>
      <div className='text-white col-span-4  dark:border-gray-700 border-dotted'>
        <div className='grid grid-cols-2 gap-5 justify-center mt-16 mx-16 mb-28'>
          <div className='col-span-1 gap-16 py-12 border-double border-amber-900 dark:border-pink-500 border-b border-t'>
            <div className='flex flex-col gap-8'>
              <h1 className='bg-clip-text text-transparent bg-gradient-to-r dark:from-pink-500 dark:to-violet-700 from-amber-800 to-amber-500 font-poppins mb-4 text-left text-5xl font-bold'>
                {exercise.title}
              </h1>
              <ExerciseHeaders
                title={'Target Muscle'}
                content={exercise.target}
              />
              <ExerciseHeaders
                title={'Body Part'}
                content={exercise.bodyPart}
              />
              <ExerciseHeaders
                title={'Equipment'}
                content={exercise.equipment}
              />
              <ExerciseHeaders
                title={'Muscle Worked'}
                content={exercise['muscles worked']}
              />
            </div>
          </div>
          <div className='col-span-1 items-center my-auto mx-auto'>
            <img
              alt='exercise gif'
              className=' rounded-3xl shadow shadow-amber-900/100 drop-shadow-2xl '
              src={exercise.gifUrl}
            ></img>
          </div>
        </div>
        <div className='px-16'>
          <h1 className='text-amber-800 dark:text-gray-100 font-bold text-xl'>
            Reference Images
            <span className='ml-2'>:</span>
          </h1>
          <div className='overflow-x-scroll scrollbar-hide'>
            <div className='grid grid-cols-5 overflow-x-auto gap-5 scrollbar-hide w-[100vw] drop-shadow-2xl justify-between mb-10'>
              {exercise.images.map((image: string) => (
                <div className='text-left my-12'>
                  <img
                    key={image}
                    src={image}
                    className='h-[100%] w-[85%] rounded-3xl'
                    alt={'exercise image'}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='px-16'>
          <h1 className='dark:text-gray-100 text-amber-800 font-bold text-xl'>
            Reference Videos
            <span className='ml-2'>:</span>
          </h1>
          <div className='overflow-x-scroll scrollbar-hide'>
            <div className='grid grid-cols-5 overflow-x-auto gap-5 scrollbar-hide w-[100vw] drop-shadow-2xl justify-between mb-16'>
              {exercise.videos.map((video: string) => (
                <div className='text-left my-12 mx-8'>
                  <ReactPlayer
                    key={video}
                    volume={100}
                    width='100'
                    url={video}
                    controls
                  ></ReactPlayer>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='text-left px-16 mb-16'>
          <div
            className='[all-unset] dark:text-gray-200 text-amber-800 border rounded-2xl dark:border-gray-700 border-amber-700 p-4 markdown-content'
            dangerouslySetInnerHTML={{
              __html: markdownToHtml(exercise.blog),
            }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default MainExerciseContent;
