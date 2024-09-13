import TargetMusclesCard from "./TargetMusclesCard.tsx";
import { useTargetMuscles } from "./useTargetMuscles.tsx";
import { ITargetMuscles } from "@/services/apiTargetMuscles.ts";
import Spinner from "@/ui/Spinner.tsx";
import Error from "@/pages/Error.tsx";
import { useSidebarStore } from "@/lib/store.ts";
import { cn } from "@/lib/utils.ts";
import SearchBar from "@/ui/SearchBar.tsx";
import { Footer } from "@/ui/Footer.tsx";

function MainTargetMuscles() {
  const {
    collapsed,
  }: {
    collapsed: boolean;
  } = useSidebarStore((state) => state);

  const { isLoading, targetMuscle, error } = useTargetMuscles();

  if (isLoading) return <Spinner />;
  if (error) return <Error />;
  return (
    <>
      <div
        className={cn(
          "relative mt-10 h-full w-full overflow-x-hidden",
          collapsed ? "lg:ml-[5rem]" : "ml-[20rem]",
        )}>
        <SearchBar />
        <div className={cn("no-scrollbar container w-full overflow-y-scroll pb-4")}>
          <div
            className={cn(
              "w-full",
              collapsed
                ? "lg:grid lg:grid-cols-3 2xl:grid-cols-4"
                : "lg:grid lg:grid-cols-2 2xl:grid-cols-3",
            )}>
            {targetMuscle.map((targetMuscle: ITargetMuscles) => {
              return (
                <TargetMusclesCard
                  key={targetMuscle.targetMuscle}
                  name={targetMuscle.targetMuscle}
                  image={targetMuscle.imageUrl}
                />
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default MainTargetMuscles;
