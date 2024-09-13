import { useBodyParts } from "./useBodyParts.tsx";
import { IBodyPart } from "@/services/apiBodyParts.ts";
import BodyPartsCard from "./BodyPartsCard.tsx";
import Spinner from "@/ui/Spinner.tsx";
import Error from "@/pages/Error.tsx";
import { cn } from "@/lib/utils.ts";
import SearchBar from "@/ui/SearchBar.tsx";
import { useSidebarStore } from "@/lib/store.ts";
import { Footer } from "@/ui/Footer.tsx";

function MainBodyParts() {
  const {
    collapsed,
  }: {
    collapsed: boolean;
  } = useSidebarStore((state) => state);

  const { isLoading, bodyParts, error } = useBodyParts();

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
            {bodyParts.map((bodyPart: IBodyPart) => {
              return (
                <BodyPartsCard
                  key={bodyPart.bodyPart}
                  name={bodyPart.bodyPart}
                  image={bodyPart.imageUrl}
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

export default MainBodyParts;
