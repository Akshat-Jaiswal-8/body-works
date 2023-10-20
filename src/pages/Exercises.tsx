import { useExercises } from "../features/Exercises/useExercises.tsx";
import Spinner from "../ui/Spinner.tsx";
import { Error } from "./Error.tsx";
import { IExercises } from "../services/apiExercises.ts";

function Exercises() {

  const {isLoading , exercises , error } = useExercises();
  if (isLoading){
    return <Spinner />;
  }

  if (error){
    return  <Error/>
  }
  return (
    <>
      <div className="text-white">
        {exercises.map((exercise : IExercises) => (<li key={exercise.id}>{exercise.id}</li>))}
      </div>
    </>
  );
}

export default Exercises;
