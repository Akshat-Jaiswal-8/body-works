import { IRoutine } from '../routines/MainRoutines.tsx';
import WorkoutSummaryTable from '@/ui/WorkoutSummaryTable.tsx';
import { markdownToHtml } from '../../../actions/markdown-to-html.ts';
import Error from '@/pages/Error.tsx';
import useRoutine from '@/features/routine/useRoutine.tsx';
import Spinner from '@/ui/Spinner.tsx';
import { useParams } from 'react-router-dom';

function MainRoutineContent() {
  const { id: routineId } = useParams();

  const { isLoading, routine, error }: { isLoading: boolean; routine: IRoutine; error: Error | null } = useRoutine({
    routineId,
  });

  if (isLoading) return <Spinner />;
  if (error) return <Error />;

  return (
    <>
      <div className='xs:px-6 sm:px-16 lg:w-[calc(100vw-20rem)] mt-[80px] md:ml-[19.5rem] my-6'>
        <div className='grid lg:grid-cols-2 gap-5 justify-center mt-16  md:mb-12 lg:mb-28'>
          <div className='col-span-1 gap-16 xs:py-6 md:py-12 border-double border-amber-900 dark:border-pink-500 border-b border-t'>
            <div className='flex flex-col md:gap-4 lg:gap-8'>
              <h1 className='bg-clip-text text-transparent bg-gradient-to-r dark:from-pink-500 dark:to-violet-700 from-amber-800 to-amber-500 font-poppins mb-4 text-left xs:text-3xl md:text-4xl xl:text-5xl font-bold'>
                {routine.routine.routine_title}
              </h1>
              <div className='text-amber-800 dark:text-gray-300 text-xl font-semibold font-montserrat'>
                {routine.routine.routine_description}
              </div>
            </div>
          </div>

          <div className='lg:col-span-1 md:col-span-full flex justify-between xs:my-10 lg:my-20 mx-auto'>
            <img
              loading={'lazy'}
              alt='exercise gif'
              className='rounded-3xl shadow shadow-amber-900/100 drop-shadow-2xl '
              src={routine.routine.routine_imageUrl}
            ></img>
          </div>
        </div>
        <div className='xs:mb-16 md:mb-20 flex border-t border-b border-dotted border-amber-900 dark:border-gray-500 justify-evenly xs:text-sm sm:text-lg xl:text-xl'>
          {routine.category.map((eachCategory: string) => {
            return (
              <a
                href={`/routines/${eachCategory}`}
                key={eachCategory}
                className='my-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-800 to-amber-600 dark:from-pink-600 dark:to-violet-400'
              >
                {eachCategory}
              </a>
            );
          })}
        </div>
        <div>
          <h1 className='text-4xl text-center dark:text-pink-500 text-amber-900 mb-12 font-bold underline underline-offset-8 decoration-amber-900 dark:decoration-pink-400 decoration-dashed'>
            Workout Summary
          </h1>
        </div>
        <div className='col-span-4 border border-dashed border-gray-700 mb-12 rounded-2xl'>
          <WorkoutSummaryTable data={routine.routine.workout_summary} />
        </div>
        <div>
          <h1 className='text-4xl xs:text-center dark:text-pink-500 text-amber-900 mb-12 font-bold underline underline-offset-8 decoration-amber-900 dark:decoration-pink-400 decoration-dashed'>
            Workout Plan
          </h1>
        </div>
        <div className='col-span-4 mb-12 border border-amber-900 dark:border-gray-700 rounded-2xl'>
          {routine.routine.workout_plan.map(({ day_plan, heading }: { day_plan: string; heading: string }) => (
            <div key={heading} className={'px-4 py-4 text-amber-800 dark:text-gray-200'}>
              <h3 className='text-amber-900 dark:text-pink-400 font-semibold text-2xl underline dark:decoration-pink-400 decoration-dashed underline-offset-8 lg:mb-8 xs:mb-4'>
                {heading}
              </h3>
              <div
                className='workout-plan-markdown-content border border-dashed border-amber-900 dark:border-gray-700 rounded-2xl'
                dangerouslySetInnerHTML={{
                  __html: markdownToHtml(day_plan),
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MainRoutineContent;
