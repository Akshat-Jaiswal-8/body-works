import { useParams } from "react-router-dom";
import { useExercise } from "./useExercise.tsx";

interface IMainExerciseContentProps {
  title: string;
  startIndex: number | undefined;
  endIndex?: number | undefined;
}

const ExerciseContent = ({ title, startIndex, endIndex }: IMainExerciseContentProps) => {
  const { exerciseId } = useParams();
  const { exercise } = useExercise(exerciseId);
  return (
    <h2 className="text-gray-200 mb-12 leading-relaxed">
      <span className="text-gray-400 mr-2 mb-6 font-semibold text-xl inline-flex items-center">
        {title}
        <span className="ml-2">:</span>
      </span>
      <p className="font-rubik leading-loose text-lg">
        {exercise.blog.slice(startIndex, endIndex ? endIndex - 5 : undefined)}
      </p>
    </h2>
  );
};

export default ExerciseContent;
