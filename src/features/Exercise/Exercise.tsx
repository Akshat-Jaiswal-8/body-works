import { useParams } from "react-router-dom";
import { useExercise } from "./useExercise.tsx";
import Spinner from "../../ui/Spinner.tsx";
import Error from "../../pages/Error.tsx";
import Navbar from "../../ui/Navbar.tsx";
import Sidebar from "../../ui/Sidebar.tsx";

function Exercise() {
  const { exerciseId } = useParams();

  const { isLoading, exercise, error } = useExercise(exerciseId);

  if (isLoading) return <Spinner />;
  if (error) return <Error />;

  const descriptionMatch: RegExpMatchArray | null =
    exercise.blog.match("Description");
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const descriptionIndex: number = descriptionMatch?.index;

  const instructionMatch: RegExpMatchArray | null =
    exercise.blog.match("Instructions");
  const instructionIndex: number = instructionMatch?.index;

  const beginnerVariationMatch: RegExpMatchArray | null =
    exercise.blog.match("Variations");
  const beginnerVariationIndex: number = beginnerVariationMatch?.index;

  const musclesWorkedMatch: RegExpMatchArray | null =
    exercise.blog.match("Muscles");
  const musclesWorkedIndex: number = musclesWorkedMatch?.index;

  const commonMistakesMatch: RegExpMatchArray | null =
    exercise.blog.match("Common Mistakes");
  const commonMistakesIndex: number = commonMistakesMatch?.index;

  const safetyPrecautionsMatch: RegExpMatchArray | null =
    exercise.blog.match("Safety Precautions");
  const safetyPrecautionsIndex: number = safetyPrecautionsMatch?.index;

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-5 h-[87vh]">
        <Sidebar />
        <div className="text-white col-span-4 w-full">
          <h1 className="text-white text-left text-4xl ml-16 mt-12 px-6 font-bold font-montserrat">
            {exercise.title}
          </h1>
          <div className="grid grid-cols-2 justify-center mt-16 mb-16">
            <div className="col-span-1 text-left ml-16 py-12 px-6">
              <div className="flex flex-col gap-8">
                <h2 className="text-gray-200 text-xl">
                  <span className="text-gray-400 font-semibold mr-2 inline-flex items-center">
                    Target Muscle
                    <span className="ml-2">:</span>
                  </span>
                  <span className="font-rubik">
                    {exercise.target.charAt(0).toUpperCase() +
                      exercise.target.slice(1)}
                  </span>
                </h2>
                <h2 className="text-gray-200 text-xl">
                  <span className="text-gray-400 font-semibold mr-2 inline-flex items-center">
                    Body Part
                    <span className="ml-2">:</span>
                  </span>
                  <span className="font-rubik">
                    {exercise.bodyPart.charAt(0).toUpperCase() +
                      exercise.bodyPart.slice(1)}
                  </span>
                </h2>
                <h2 className="text-gray-200 text-xl">
                  <span className="text-gray-400 font-semibold mr-2 inline-flex items-center">
                    Equipment
                    <span className="ml-2">:</span>
                  </span>
                  <span className="font-rubik">
                    {exercise.equipment.charAt(0).toUpperCase() +
                      exercise.equipment.slice(1)}
                  </span>
                </h2>
                <h2 className="text-gray-200 text-xl">
                  <span className="text-gray-400 font-semibold mr-2 pb-4 inline-flex items-center">
                    Muscle Worked
                    <span className="ml-2 ">:</span>
                  </span>
                  <p className="font-rubik">
                    {exercise["muscles worked"].slice(1)}
                  </p>
                </h2>
              </div>
            </div>
            <div className="col-span-1 mx-auto">
              <img
                alt="exercise gif"
                className=" rounded-3xl "
                src={exercise.gifUrl}
              ></img>
            </div>
          </div>
          <div className="text-left mx-16 px-6">
            <h2 className="text-gray-200 mb-12 leading-relaxed">
              <span className="text-gray-400 mr-2 font-semibold text-xl inline-flex items-center">
                Description
                <span className="ml-2">:</span>
              </span>
              <p className="font-rubik leading-loose text-lg">
                {exercise.blog.slice(
                  descriptionIndex + 11,
                  instructionIndex - 5,
                )}
              </p>
            </h2>
            <h2 className="text-gray-200 mb-12 leading-relaxed">
              <span className="text-gray-400 font-semibold text-xl mr-2 inline-flex items-center">
                Instructions
                <span className="ml-2">:</span>
              </span>
              <p className="font-rubik leading-loose text-lg">
                {exercise.blog.slice(
                  instructionIndex + 12,
                  beginnerVariationIndex - 5,
                )}
              </p>
            </h2>{" "}
            <h2 className="text-gray-200 mb-12 leading-relaxed">
              <span className="text-gray-400 font-semibold text-xl mr-2 inline-flex items-center">
                Variations
                <span className="ml-2">:</span>
              </span>
              <p className="font-rubik leading-loose mb-2 text-lg">
                {exercise.blog.slice(
                  beginnerVariationIndex + 12,
                  musclesWorkedIndex - 5,
                )}
              </p>
            </h2>
            <h2 className="text-gray-200 mb-12 leading-relaxed">
              <span className="text-gray-400 font-semibold text-xl mr-2 inline-flex items-center">
                Common Mistakes
                <span className="ml-2">:</span>
              </span>
              <p className="font-rubik leading-loose mb-2 text-lg">
                {exercise.blog.slice(
                  commonMistakesIndex + 18,
                  safetyPrecautionsIndex - 5,
                )}
              </p>
            </h2>
            <h2 className="text-gray-200 mb-12 leading-relaxed">
              <span className="text-gray-400 font-semibold text-xl mr-2 inline-flex items-center">
                Safety Precautions
                <span className="ml-2">:</span>
              </span>
              <p className="font-rubik leading-loose mb-2 text-lg">
                {exercise.blog.slice(safetyPrecautionsIndex + 20)}
              </p>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Exercise;
