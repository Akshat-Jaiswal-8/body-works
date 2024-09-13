import Sidebar from "@/ui/Sidebar.tsx";
import MainTargetMuscles from "@/features/TargetMuscle/MainTargetMuscles.tsx";
import { cn } from "@/lib/utils.ts";

function TargetMuscles() {
  return (
    <>
      <div className={cn("flex max-h-svh pt-[4rem]")}>
        <Sidebar />
        <MainTargetMuscles />
      </div>
    </>
  );
}

export default TargetMuscles;
