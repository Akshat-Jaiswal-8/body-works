import Sidebar from "@/ui/Sidebar.tsx";
import MainBodyParts from "@/features/body-parts/MainBodyParts.tsx";
import { cn } from "@/lib/utils.ts";

function BodyParts() {
  return (
    <>
      <div className={cn("flex max-h-svh pt-[4rem]")}>
        <Sidebar />
        <MainBodyParts />
      </div>
    </>
  );
}

export default BodyParts;
