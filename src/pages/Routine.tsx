import WorkoutSummaryTable from "@/ui/WorkoutSummaryTable.tsx";
import { markdownToHtml } from "../../actions/markdown-to-html.ts";
import { useParams } from "react-router-dom";
import useRoutine from "@/hooks/useRoutine.tsx";
import { useErrorHandler } from "@/lib/error-utils.tsx";
import { useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import { Footer } from "@/ui/Footer.tsx";

function Routine() {
  const { id: routineId } = useParams();
  const { isLoading, routine, error, refetch, isRefetching } = useRoutine({
    routineId,
  });

  const { handleError } = useErrorHandler();

  useEffect(() => {
    if (error) {
      handleError(error, refetch);
    }
  }, [error]);

  if (isLoading || isRefetching)
    return (
      <div className={"container mx-auto h-screen w-full pt-[calc(var(--navbar-height)+4rem)]"}>
        <div className={"my-10"}>
          <Skeleton className={"h-20 w-1/2"} />
          <Skeleton className={"mt-10 min-h-[60vh] w-full"} />
        </div>
        <Footer />
      </div>
    );

  {
    return (
      routine && (
        <div className={"container relative mt-10 h-full w-full overflow-x-hidden"}>
          <div className="mt-16 grid justify-center gap-5 md:mb-12 lg:mb-28 lg:grid-cols-2">
            <div className="col-span-1 gap-16 border-b border-t border-double border-amber-900 dark:border-pink-500 xs:py-6 md:py-12">
              <div className="flex flex-col md:gap-4 lg:gap-8">
                <h1 className="mb-4 bg-gradient-to-r from-amber-800 to-amber-500 bg-clip-text py-2 text-left font-poppins font-bold text-transparent dark:from-pink-500 dark:to-violet-700 xs:text-3xl md:text-4xl xl:text-5xl">
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
                src={routine.routine.routine_imageUrl}
              />
            </div>
          </div>
          <div className="flex w-full justify-evenly gap-x-5 overflow-x-auto text-nowrap border-b border-t border-dotted border-amber-900 dark:border-gray-500 xs:mb-16 xs:text-xs sm:text-sm md:mb-20 xl:text-xl">
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
                    }}
                  />
                </div>
              ),
            )}
          </div>
          <Footer />
        </div>
      )
    );
  }
}

export default Routine;
