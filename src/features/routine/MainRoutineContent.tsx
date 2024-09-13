import { IRoutine } from "../routines/MainRoutines.tsx";
import WorkoutSummaryTable from "@/ui/WorkoutSummaryTable.tsx";
import { markdownToHtml } from "../../../actions/markdown-to-html.ts";
import Error from "@/pages/Error.tsx";
import useRoutine from "@/features/routine/useRoutine.tsx";
import Spinner from "@/ui/Spinner.tsx";
import { useParams } from "react-router-dom";
import { cn } from "@/lib/utils.ts";
import { useSidebarStore } from "@/lib/store.ts";

function MainRoutineContent() {
  const { id: routineId } = useParams();

  const {
    isLoading,
    routine,
    error,
  }: { isLoading: boolean; routine: IRoutine; error: Error | null } = useRoutine({
    routineId,
  });

  const {
    collapsed,
  }: {
    collapsed: boolean;
  } = useSidebarStore((state) => state);

  if (isLoading) return <Spinner />;
  if (error) return <Error />;

  return (
    <>
      <div
        className={cn(
          "container relative mt-10 h-full w-full overflow-x-hidden",
          collapsed ? "lg:ml-[5rem]" : "ml-[20rem]",
        )}>
        {" "}
        <div className="mt-16 grid justify-center gap-5 md:mb-12 lg:mb-28 lg:grid-cols-2">
          <div className="col-span-1 gap-16 border-b border-t border-double border-amber-900 dark:border-pink-500 xs:py-6 md:py-12">
            <div className="flex flex-col md:gap-4 lg:gap-8">
              <h1 className="mb-4 bg-gradient-to-r from-amber-800 to-amber-500 bg-clip-text text-left font-poppins font-bold text-transparent dark:from-pink-500 dark:to-violet-700 xs:text-3xl md:text-4xl xl:text-5xl">
                {routine.routine.routine_title}
              </h1>
              <div className="font-montserrat text-xl font-semibold text-amber-800 dark:text-gray-300">
                {routine.routine.routine_description}
              </div>
            </div>
          </div>

          <div className="mx-auto flex justify-between xs:my-10 md:col-span-full lg:col-span-1 lg:my-20">
            <img
              loading={"lazy"}
              alt="exercise gif"
              className="rounded-3xl shadow shadow-amber-900/100 drop-shadow-2xl"
              src={routine.routine.routine_imageUrl}></img>
          </div>
        </div>
        <div className="flex justify-evenly border-b border-t border-dotted border-amber-900 dark:border-gray-500 xs:mb-16 xs:text-sm sm:text-lg md:mb-20 xl:text-xl">
          {routine.category.map((eachCategory: string) => {
            return (
              <a
                href={`/routines/${eachCategory}`}
                key={eachCategory}
                className="my-6 bg-gradient-to-r from-amber-800 to-amber-600 bg-clip-text text-transparent dark:from-pink-600 dark:to-violet-400">
                {eachCategory}
              </a>
            );
          })}
        </div>
        <div>
          <h1 className="mb-12 text-center text-4xl font-bold text-amber-900 underline decoration-amber-900 decoration-dashed underline-offset-8 dark:text-pink-500 dark:decoration-pink-400">
            Workout Summary
          </h1>
        </div>
        <div className="col-span-4 mb-12 rounded-2xl border border-dashed border-gray-700">
          <WorkoutSummaryTable data={routine.routine.workout_summary} />
        </div>
        <div>
          <h1 className="mb-12 text-4xl font-bold text-amber-900 underline decoration-amber-900 decoration-dashed underline-offset-8 dark:text-pink-500 dark:decoration-pink-400 xs:text-center">
            Workout Plan
          </h1>
        </div>
        <div className="col-span-4 mb-12 rounded-2xl border border-amber-900 dark:border-gray-700">
          {routine.routine.workout_plan.map(
            ({ day_plan, heading }: { day_plan: string; heading: string }) => (
              <div key={heading} className={"px-4 py-4 text-amber-800 dark:text-gray-200"}>
                <h3 className="text-2xl font-semibold text-amber-900 underline decoration-dashed underline-offset-8 dark:text-pink-400 dark:decoration-pink-400 xs:mb-4 lg:mb-8">
                  {heading}
                </h3>
                <div
                  className="workout-plan-markdown-content rounded-2xl border border-dashed border-amber-900 dark:border-gray-700"
                  dangerouslySetInnerHTML={{
                    __html: markdownToHtml(day_plan),
                  }}></div>
              </div>
            ),
          )}
        </div>
      </div>
    </>
  );
}

export default MainRoutineContent;
