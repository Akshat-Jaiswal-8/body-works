import ExerciseHeaders from "./ExerciseHeaders.tsx";
import { markdownToHtml } from "../../../actions/markdown-to-html.ts";
import { useParams } from "react-router-dom";
import { useExercise } from "./useExercise.tsx";
import ReactPlayer from "react-player";
import "./customScrollbar.css";
import Spinner from "@/ui/Spinner.tsx";
import Error from "@/pages/Error.tsx";

function MainExerciseContent() {
  const { exerciseId } = useParams();
  const { exercise, isLoading, error } = useExercise(exerciseId);

  if (isLoading) return <Spinner />;
  if (error) return <Error />;

  return (
    <>
      <div className="lg:w-[calc(100vw-20rem)] mt-[80px] md:ml-[19.5rem] my-6">
        <div className="lg:grid lg:grid-cols-2 gap-5 justify-center mt-16 xs:mx-6 xs:mb-20 md:mb-20 lg:mb-28">
          <div className="col-span-1 gap-16 xs:py-6 md:py-12 border-double border-amber-900 dark:border-pink-500 border-b border-t">
            <div className="flex flex-col md:gap-4 lg:gap-8">
              <h1 className="bg-clip-text text-transparent bg-gradient-to-r dark:from-pink-500 dark:to-violet-700 from-amber-800 to-amber-500 font-poppins mb-4 text-left xs:text-3xl md:text-4xl xl:text-5xl font-bold">
                {exercise.title}
              </h1>
              <ExerciseHeaders title={"Target Muscle"} content={exercise.target} />
              <ExerciseHeaders title={"Body Part"} content={exercise.bodyPart} />
              <ExerciseHeaders title={"Equipment"} content={exercise.equipment} />
              <ExerciseHeaders title={"Muscle Worked"} content={exercise["muscles worked"]} />
            </div>
          </div>
          <div className="lg:col-span-1 flex justify-between xs:my-10 lg:my-20 mx-auto">
            <img
              loading={"lazy"}
              alt="exercise gif"
              className=" rounded-3xl shadow shadow-amber-900/100 drop-shadow-2xl "
              src={exercise.gifUrl}
            ></img>
          </div>
        </div>
        <div className="xs:mx-6 mx-16 mb-12">
          <h1 className="lg:text-3xl xs:text-xl text-amber-700 dark:text-gray-200 underline underline-offset-8 decoration-amber-500 dark:decoration-gray-200 font-bold">
            Reference Images
            <span className="ml-2">:</span>
          </h1>
          <div className="overflow-x-scroll custom-scrollbar">
            <div className="grid grid-cols-5 overflow-x-auto gap-5 xs:w-[350vw] md:w-[200vw] xl:w-[150vw] justify-between mb-10">
              {exercise.images.map((image: string) => (
                <div key={image} className="px-4 mt-10">
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
        <div className="xs:mx-6 mx-16 mb-12">
          <h1 className="lg:text-3xl xs:text-xl text-amber-700 dark:text-gray-200 underline underline-offset-8 decoration-amber-500 dark:decoration-gray-200 font-bold">
            Reference Videos
            <span className="ml-2">:</span>
          </h1>
          <div className="overflow-x-scroll custom-scrollbar">
            <div className="grid grid-cols-5 overflow-x-auto gap-10 xs:w-[350vw] md:w-[200vw] xl:w-[150vw] justify-between my-12">
              {exercise.videos.map((video: string) => (
                <ReactPlayer key={video} volume={100} width="100" height={250} url={video} controls></ReactPlayer>
              ))}
            </div>
          </div>
        </div>

        <div className="text-left xs:mx-6 mb-16">
          <div
            className="[all-unset] dark:text-gray-200 text-amber-800 border rounded-2xl dark:border-gray-700 border-amber-700 p-4 markdown-content"
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
