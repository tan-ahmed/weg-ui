import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  showItemsPerPage?: boolean;
}

export function Pagination({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
  showItemsPerPage = true,
}: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-between w-full max-w-xs">
      {showItemsPerPage && (
        <span className="text-sm text-gray-700 font-medium">
          Items per page: {itemsPerPage}
        </span>
      )}

      <div
        className={cn(
          "flex items-center gap-4",
          !showItemsPerPage && "ml-auto"
        )}
      >
        <button
          type="button"
          onClick={handlePrevious}
          disabled={currentPage === 1}
          aria-label="Previous page"
          className={cn(
            "p-1 rounded-md transition-colors",
            currentPage === 1
              ? "text-gray-400 cursor-not-allowed"
              : "text-gray-700 hover:text-primary-600"
          )}
        >
          <ChevronLeft size={20} />
        </button>

        <span className="text-sm text-gray-700 font-medium">
          {startItem} - {endItem} of {totalItems}
        </span>

        <button
          type="button"
          onClick={handleNext}
          disabled={currentPage === totalPages}
          aria-label="Next page"
          className={cn(
            "p-1 rounded-md transition-colors",
            currentPage === totalPages
              ? "text-gray-400 cursor-not-allowed"
              : "text-gray-700 hover:text-primary-600"
          )}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
