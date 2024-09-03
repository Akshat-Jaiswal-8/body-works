import Sidebar from "@/ui/Sidebar.tsx";
import MainExercises from "@/features/Exercises/MainExercises.tsx";
import { useMediaQuery } from "@uidotdev/usehooks";

function Exercises() {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 767px)");

  return (
    <>
      <div className="h-full grid grid-cols-5 gap-4 justify-between">
        {!isSmallDevice && <Sidebar />}
        <MainExercises />
      </div>
    </>
  );
}
export default Exercises;
