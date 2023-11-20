// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { IRoutine } from '../routines/MainRoutines.tsx';
import WorkoutSummaryTable from '../../ui/WorkoutSummaryTable.tsx';

function MainRoutineContent({ routine, category }: IRoutine) {
  return (
    <>
      <div className='text-white col-span-4'>
        <div className='mx-16'>
          <div className='grid grid-cols-2 gap-5 justify-center mt-14 mb-28'>
            <div className='col-span-1 gap-16 py-12 border-double border-amber-900 border-b border-t'>
              <div className='flex flex-col gap-8'>
                <h1 className='bg-clip-text text-transparent bg-gradient-to-r dark:bg-gradient-to-r dark:from-pink-500 dark:to-violet-700 from-amber-600 to-amber-500 font-poppins mb-4 text-left text-5xl font-bold'>
                  {routine.routine_title}
                </h1>
                <div className='text-amber-800 dark:text-gray-300 text-xl font-semibold font-montserrat'>
                  {routine.routine_description}
                </div>
              </div>
            </div>
            <div className='col-span-1 items-center mx-4'>
              <img
                alt='exercise gif'
                className='rounded-3xl h-full'
                src={routine.routine_imageUrl}
              ></img>
            </div>
          </div>
          <div className='text-white mb-28 flex border-t border-b border-dotted border-amber-900 dark:border-gray-500 justify-evenly'>
            {category.map((eachCategory: string) => {
              return (
                <span
                  key={eachCategory}
                  className='my-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-800 to-amber-600 dark:from-pink-600 dark:to-violet-400'
                >
                  {eachCategory}
                </span>
              );
            })}
          </div>
          <div>
            <h1 className='text-2xl text-amber-900 dark:text-pink-500 mb-12 font-bold underline underline-offset-8 decoration-amber-900 dark:decoration-gray-400 decoration-dashed'>
              Workout Summary
            </h1>
          </div>
          <div className='col-span-4 border-t border-r border-l border-gray-700 mb-12 rounded-2xl'>
            <WorkoutSummaryTable data={routine.workout_summary} />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainRoutineContent;
