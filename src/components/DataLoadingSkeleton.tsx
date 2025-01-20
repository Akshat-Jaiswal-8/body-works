import { cn } from "@/lib/utils.ts";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import { SectionWrapper } from "@/components/SectionWrapper.tsx";

export const DataLoadingSkeleton = () => {
  return (
    <SectionWrapper>
      <div
        className={cn(
          "mx-auto mt-16 grid w-full justify-items-center gap-10 lg:grid-cols-2 2xl:max-w-screen-xl 2xl:grid-cols-3",
        )}>
        {[...Array(6)].map((_, i) => (
          <Skeleton key={i} className={"h-[21rem] w-72 rounded-2xl"} />
        ))}
      </div>
    </SectionWrapper>
  );
};
