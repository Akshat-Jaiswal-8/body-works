import Sidebar from "../ui/Sidebar.tsx";
import MainExerciseContent from "../features/Exercise/MainExerciseContent.tsx";
import { cn } from "@/lib/utils.ts";

const Exercise = () => {
  return (
    <>
      <div className={cn("flex max-h-svh pt-[4rem]")}>
        <Sidebar />
        <MainExerciseContent />
      </div>
    </>
  );
};

export default Exercise;
