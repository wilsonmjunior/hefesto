import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid';

import { LinkButton } from '@/components/common/LinkButton';
import { PaginationProps } from '../types';
import { PaginationItem, getPaginateUrl } from './PaginationItem';

import './pagination.css';

export const DOTS = '...';

function generateRangePage(start: number, end: number) {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
}

export function Pagination({
  currentPage,
  pathBase,
  rowsPerPage,
  totalPages,
}: PaginationProps) {
  const siblingCount = 1;

  function rangePages() {
    const totalPageCount = Math.ceil(totalPages / rowsPerPage);
    const totalPageNumbers = siblingCount + 5;

    if (totalPageNumbers >= totalPageCount) {
      return generateRangePage(1, totalPageCount);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    );

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = generateRangePage(1, leftItemCount);

      return [...leftRange, DOTS, totalPageCount];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = generateRangePage(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      );
      return [firstPageIndex, DOTS, ...rightRange];
    }

    const middleRange = generateRangePage(leftSiblingIndex, rightSiblingIndex);
    return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
  }

  const pages = rangePages();

  const nextPage = Math.min(currentPage + 1, totalPages - 1);
  const prevPage = Math.max(currentPage, siblingCount) - 1;

  return (
    <nav aria-label="Page navigation" className="pagination-nav">
      <LinkButton
        href={getPaginateUrl({ pathBase, page: prevPage, rowsPerPage })}
        prefetch={false}
      >
        <ArrowLeftIcon className="w-6 h-6 mr-2" />
        Anterior
      </LinkButton>

      <div className="pagination-content">
        {pages.map((page) => (
          <PaginationItem
            key={page}
            currentPage={currentPage}
            page={page}
            pathBase={pathBase}
            rowsPerPage={rowsPerPage}
          />
        ))}
      </div>

      <LinkButton
        href={getPaginateUrl({ pathBase, page: nextPage, rowsPerPage })}
        prefetch={false}
      >
        Próximo
        <ArrowRightIcon className="w-6 h-6 ml-2" />
      </LinkButton>
    </nav>
  );
}
