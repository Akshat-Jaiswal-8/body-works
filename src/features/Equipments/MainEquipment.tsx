import { IExercise } from "@/services/apiExercises.ts";
import EquipmentCard from "./EquipmentCard.tsx";
import Spinner from "@/ui/Spinner.tsx";
import Error from "@/pages/Error.tsx";
import { useEquipment } from "@/features/Equipments/useEquipment.tsx";
import { useParams } from "react-router-dom";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination.tsx";
import { useState } from "react";
import SearchBar from "@/ui/SearchBar.tsx";
import { cn } from "@/lib/utils.ts";
import { useSidebarStore } from "@/lib/store.ts";

function MainEquipment() {
  const { equipment } = useParams();
  const [page, setPage] = useState(1);
  const limit = 9;
  const {
    Equipment,
  }: {
    Equipment: IExercise | undefined;
  } = useEquipment(equipment, limit, page);

  const {
    collapsed,
  }: {
    collapsed: boolean;
  } = useSidebarStore((state) => state);

  const {
    isLoading,
    error,
  }: {
    isLoading: boolean;
    error: Error | null;
  } = useEquipment(equipment, limit, page);

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
  };

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
        <div
          className={cn(
            "w-full",
            collapsed
              ? "lg:grid lg:grid-cols-3 2xl:grid-cols-4"
              : "lg:grid lg:grid-cols-2 2xl:grid-cols-3",
          )}>
          {Object(Equipment)?.map((Equipment: IExercise) => {
            return (
              <EquipmentCard
                id={Equipment.id}
                key={Equipment.id}
                gif={Equipment.gifUrl}
                title={Equipment.title}
                blog={Equipment.blog}
              />
            );
          })}
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious onClick={handlePreviousPage} />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext onClick={handleNextPage} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
}

export default MainEquipment;
