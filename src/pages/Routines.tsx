import React from "react";
import MainRoutines from "@/features/routines/MainRoutines.tsx";
import Sidebar from "@/ui/Sidebar.tsx";
import { cn } from "@/lib/utils.ts";

function Routines(): React.ReactNode {
  return (
    <div className={cn("flex max-h-svh pt-[4rem]")}>
      <Sidebar />
      <MainRoutines />
    </div>
  );
}

export default Routines;
