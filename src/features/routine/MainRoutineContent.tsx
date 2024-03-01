// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { IRoutine } from '../routines/MainRoutines.tsx';
import WorkoutSummaryTable from '../../ui/WorkoutSummaryTable.tsx';
import { markdownToHtml } from '../../../actions/markdown-to-html.ts';
import { Fragment } from 'react';

function MainRoutineContent({ routine, category }: IRoutine) {
  return (
    <>
      <div className='text-white col-span-4'>
        <div className='mx-16'>
          <div className='grid grid-cols-2 gap-5 justify-center mt-14 mb-28'>
            <div className='col-span-1 gap-16 py-12 border-double dark:border-pink-500 border-amber-900 border-b border-t'>
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
                loading={'lazy'}
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
            <h1 className='text-3xl dark:text-pink-500 text-amber-700 mb-12 font-bold underline underline-offset-8 decoration-amber-900 dark:decoration-pink-400 decoration-dashed'>
              Workout Summary
            </h1>
          </div>
          <div className='col-span-4 border border-dashed border-gray-700 mb-12 rounded-2xl'>
            <WorkoutSummaryTable data={routine.workout_summary} />
          </div>
          <div>
            <h1 className='text-3xl text-amber-900 dark:text-pink-500 my-24 font-bold underline underline-offset-8 decoration-amber-900 dark:decoration-pink-400 decoration-dashed'>
              Workout Plan
            </h1>
          </div>
          <div className='col-span-4 border-t border-l border-r border-amber-900 border-dashed dark:border-gray-700 mb-12 rounded-tl-2xl rounded-tr-2xl'>
            {routine.workout_plan.map(({ day_plan, heading }: { day_plan: string; heading: string }) => (
              <Fragment key={heading}>
                <h3 className='m-6 font-semibold text-2xl text-amber-700 dark:text-pink-400 underline dark:decoration-pink-400 decoration-dashed underline-offset-8 '>
                  {heading}
                </h3>
                <div
                  className='workout-plan-markdown-content'
                  dangerouslySetInnerHTML={{
                    __html: markdownToHtml(day_plan),
                  }}
                ></div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MainRoutineContent;
