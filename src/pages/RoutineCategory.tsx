import Sidebar from "@/ui/Sidebar.tsx";
import MainRoutineCategory from "@/features/routine-category/MainRoutineCategory.tsx";
import { cn } from "@/lib/utils.ts";

function RoutineCategory() {
  return (
    <>
      <div className={cn("flex max-h-svh pt-[4rem]")}>
        <Sidebar />
        <MainRoutineCategory />
      </div>
    </>
  );
}

export default RoutineCategory;
