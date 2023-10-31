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
      <div className="bg-[#FFFBF5] dark:bg-gray-950 grid grid-cols-5 h-full">
        <Sidebar />
        <MainExercises />
      </div>
    </>
  );
}
export default Exercises;
