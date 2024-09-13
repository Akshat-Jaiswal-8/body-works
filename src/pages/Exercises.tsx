import Sidebar from "@/ui/Sidebar.tsx";
import MainExercises from "@/features/Exercises/MainExercises.tsx";
import { cn } from "@/lib/utils";

function Exercises() {
  return (
    <>
      <div className={cn("flex max-h-svh pt-[4rem]")}>
        <Sidebar />
        <MainExercises />
      </div>
    </>
  );
}
export default Exercises;
