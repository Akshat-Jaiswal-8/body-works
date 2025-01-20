import { useParams } from "react-router-dom";
import { useExercise } from "@/hooks/useExercise.tsx";
import { useErrorHandler } from "@/lib/error-utils.tsx";
import { useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import ExerciseHeaders from "@/components/ExerciseHeaders.tsx";
import ReactPlayer from "react-player";
import { markdownToHtml } from "../../actions/markdown-to-html.ts";
import { Footer } from "@/ui/Footer.tsx";

const Exercise = () => {
  const { exerciseId } = useParams();
  const { exercise, isLoading, error, refetch, isRefetching } = useExercise(exerciseId);

  const { handleError } = useErrorHandler();

  useEffect(() => {
    if (error) {
      handleError(error, refetch);
    }
  }, [error]);

  if (isLoading || isRefetching) {
    return (
      <div className={"container mx-auto h-screen w-full pt-[calc(var(--navbar-height)+4rem)]"}>
        <div className={"my-10"}>
          <Skeleton className={"h-20 w-1/2"} />
          <Skeleton className={"mt-10 min-h-[60vh] w-full"} />
        </div>
      </div>
    );
  }
  return (
    <>
      <div className={"flex max-h-svh pt-[4rem]"}>
        {exercise && (
          <div className={"container relative mt-10 h-full w-full overflow-x-hidden"}>
            <div className="mt-16 justify-center gap-5 xs:mx-6 xs:mb-20 md:mb-20 lg:mb-28 lg:grid lg:grid-cols-2">
              <div className="col-span-1 gap-16 border-b border-t border-double border-amber-900 dark:border-pink-500 xs:py-6 md:py-12">
                <div className="flex flex-col md:gap-4 lg:gap-8">
                  <h1 className="mb-4 bg-gradient-to-r from-amber-800 to-amber-500 bg-clip-text text-left font-poppins font-bold text-transparent dark:from-pink-500 dark:to-violet-700 xs:text-3xl md:text-4xl xl:text-5xl">
                    {exercise?.title}
                  </h1>
                  <ExerciseHeaders title={"Target Muscle"} content={exercise?.target} />
                  <ExerciseHeaders title={"Body Part"} content={exercise?.bodyPart} />
                  <ExerciseHeaders title={"Equipment"} content={exercise?.equipment} />
                  <ExerciseHeaders title={"Muscle Worked"} content={exercise?.["muscles worked"]} />
                </div>
              </div>
              <div className="mx-auto flex justify-between xs:my-10 lg:col-span-1 lg:my-20">
                <img
                  loading={"lazy"}
                  alt="exercise gif"
                  className="rounded-3xl shadow shadow-amber-900/100 drop-shadow-2xl"
                  src={exercise?.gifUrl}
                />
              </div>
            </div>
            {exercise.images?.length > 0 && (
              <div className="mx-16 mb-12 xs:mx-6">
                <h1 className="font-bold text-amber-700 underline decoration-amber-500 underline-offset-8 dark:text-gray-200 dark:decoration-gray-200 xs:text-xl lg:text-3xl">
                  Reference Images
                  <span className="ml-2">:</span>
                </h1>
                <div className="custom-scrollbar overflow-x-scroll">
                  <div className="mb-10 grid grid-cols-5 justify-between gap-5 overflow-x-auto xs:w-[350vw] md:w-[200vw] xl:w-[150vw]">
                    {exercise?.images?.map((image: string) => (
                      <div key={image} className="mt-10 px-4">
                        <img
                          loading={"lazy"}
                          key={image}
                          src={image}
                          className="h-[15rem] w-[20rem] rounded-3xl"
                          alt={"exercise image"}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {exercise.videos?.length > 0 && (
              <div className="mx-16 mb-12 xs:mx-6">
                <h1 className="font-bold text-amber-700 underline decoration-amber-500 underline-offset-8 dark:text-gray-200 dark:decoration-gray-200 xs:text-xl lg:text-3xl">
                  Reference Videos
                  <span className="ml-2">:</span>
                </h1>
                <div className="custom-scrollbar overflow-x-scroll">
                  <div className="my-12 grid grid-cols-5 justify-between gap-10 overflow-x-auto xs:w-[350vw] md:w-[200vw] xl:w-[150vw]">
                    {exercise?.videos?.map((video: string) => (
                      <ReactPlayer
                        key={video}
                        volume={100}
                        width="100"
                        height={250}
                        url={video}
                        controls
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className="mb-16 text-left xs:mx-6">
              <div
                className="[all-unset] markdown-content rounded-2xl border border-amber-700 p-4 text-amber-800 dark:border-gray-700 dark:text-gray-200"
                dangerouslySetInnerHTML={{
                  __html: markdownToHtml(exercise?.blog),
                }}
              />
            </div>
            <Footer />
          </div>
        )}
      </div>
    </>
  );
};

export default Exercise;
