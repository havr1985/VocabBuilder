import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { selectAllUserWords } from "@/services/slices/userWordsSlice";
import { creatArray } from "@/shared/function/function";
import { useState } from "react";
import { useSelector } from "react-redux";

export const PaginationTable = () => {
  const { totalPages } = useSelector(selectAllUserWords);
  const [currentPage, setCurrentPage] = useState(1);
  

  const pages = creatArray(totalPages);

  const prevClick = () => {
    if (currentPage === 1) {
      return;
    }
    setCurrentPage((prev) => prev - 1);
  };

  const nextClick = () => {
    if (currentPage === totalPages) {
      return;
    }
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <>
      {totalPages === 1 ? null : (
        <Pagination>
          <PaginationContent>
            <PaginationItem className=" cursor-pointer">
              <PaginationPrevious
                onClick={prevClick}
                className={`${currentPage === 1 && " text-slate-200"}`}
              />
            </PaginationItem>
            {pages.map((item) => (
              <PaginationItem key={item} className=" cursor-pointer">
                <PaginationLink
                  onClick={() => setCurrentPage(item)}
                  className={`${
                    currentPage === item && "bg-prim-green text-prim-white"
                  }`}
                >
                  {item}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem className=" cursor-pointer">
              <PaginationNext
                onClick={nextClick}
                className={`${currentPage === totalPages && "text-slate-200"}`}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </>
  );
};
