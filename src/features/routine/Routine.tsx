import { cn } from "@/lib/utils.ts";
import Sidebar from "../../ui/Sidebar.tsx";

import MainRoutineContent from "./MainRoutineContent.tsx";

function Routine() {
  return (
    <>
      <div className={cn("flex max-h-svh pt-[4rem]")}>
        <Sidebar />
        <MainRoutineContent />
      </div>
    </>
  );
}

export default Routine;
