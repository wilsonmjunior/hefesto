import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

import { PaginationProps } from "./types";
import { PaginationItem, getPaginateUrl } from "./PaginationItem";

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1
    })
    .filter(page => page > 0)
}

export function Pagination({ currentPage, pathBase, rowsPerPage, totalPages }: PaginationProps) {
  if (totalPages === 1) return null;

  const siblingsCount = 1;
  const lastPage = Math.ceil(totalPages / rowsPerPage);

  const previousPages = currentPage > 1 
    ? generatePagesArray((currentPage - 1 - siblingsCount), currentPage - 1) 
    : []

  const nextPages = currentPage < lastPage 
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage)) 
    : []

  const nextPage = Math.min(currentPage + 1, totalPages);
  const prevPage = Math.max(currentPage - 1, siblingsCount);

  return (
    <div>
      {currentPage}
      <nav aria-label="Page navigation" className="pagination-nav">
        <div className="pagination-content">
          <Link
            href={getPaginateUrl({ pathBase, page: prevPage, rowsPerPage })}
            className="pagination-previous" 
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </Link>

          { currentPage > (siblingsCount + 1) && ( 
            <>
              <PaginationItem
                currentPage={currentPage}
                page={1}
                pathBase={pathBase}
                rowsPerPage={rowsPerPage}
              />
              
              { currentPage > (2 + siblingsCount) && (
                <span className="pagination-siblings">...</span>
              )}
            </>
          )}  

          { previousPages.length > 0 && previousPages.map((page) => (
            <PaginationItem
              key={page}
              currentPage={currentPage}
              page={page}
              pathBase={pathBase}
              rowsPerPage={rowsPerPage}
            />
          ))}

          {/* curren page */}
          <PaginationItem
            currentPage={currentPage}
            page={currentPage}
            pathBase={pathBase}
            rowsPerPage={rowsPerPage}
          />

          { nextPages.length > 0 && nextPages.map((page) => (
            <PaginationItem
              key={page}
              currentPage={currentPage}
              page={page}
              pathBase={pathBase}
              rowsPerPage={rowsPerPage}
            />
          ))}

          { (currentPage + siblingsCount) < lastPage && (
            <>
              {(currentPage + 1 + siblingsCount) < lastPage && (
                <span className="pagination-siblings">...</span>
              )}
              <PaginationItem
                currentPage={currentPage}
                page={lastPage}
                pathBase={pathBase}
                rowsPerPage={rowsPerPage}
              />
            </>
          )}

          <Link
            href={getPaginateUrl({ pathBase, page: nextPage, rowsPerPage })}
            className="pagination-next" 
          >
            <ChevronRightIcon className="w-6 h-6" />
          </Link>
        </div>
      </nav>
    </div>
  )
}
