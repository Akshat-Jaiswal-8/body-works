import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination.tsx";

export const PaginationProvidor = ({
  handleNextPage,
  handlePreviousPage,
}: {
  handleNextPage: () => void;
  handlePreviousPage: () => void;
}) => {
  return (
    <Pagination className={"mt-10"}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={handlePreviousPage} />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext onClick={handleNextPage} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
