import { useExercises } from "../features/Exercises/useExercises.tsx";
import Spinner from "../ui/Spinner.tsx";
import Error from "./Error.tsx";
import Navbar from "../ui/Navbar.tsx";
import Sidebar from "../ui/Sidebar.tsx";
import MainExercises from "../features/Exercises/MainExercises.tsx";

function Exercises() {
  const { isLoading, error } = useExercises();

  if (isLoading) return <Spinner />;
  if (error) return <Error />;

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-5 h-[87vh]">
        <Sidebar />
        <MainExercises />
      </div>
    </>
  );
}
export default Exercises;
