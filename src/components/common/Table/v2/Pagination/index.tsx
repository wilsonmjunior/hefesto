import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid'

import { LinkButton } from '@/components/common/LinkButton'
import { PaginationProps } from '../types'
import { PaginationItem, getPaginateUrl } from './PaginationItem'

import './pagination.css'

export const DOTS = '...'

const SIBLING_COUNT = 1

function generateRangePage(start: number, end: number) {
  const length = end - start + 1
  return Array.from({ length }, (_, idx) => idx + start)
}

export function Pagination({
  currentPage,
  pathBase,
  rowsPerPage,
  totalPages,
}: PaginationProps) {

  const paginationRange = () => {
    const totalPageNumbers = SIBLING_COUNT + 5;

    if (totalPageNumbers >= totalPages) {
      return generateRangePage(1, totalPages);
    }

    const leftSiblingIndex = Math.max(currentPage - SIBLING_COUNT, 1);
    const rightSiblingIndex = Math.min(
      currentPage + SIBLING_COUNT,
      totalPages
    );

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPages;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * SIBLING_COUNT;
      let leftRange = generateRangePage(1, leftItemCount);

      return [...leftRange, DOTS, totalPages];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * SIBLING_COUNT;
      let rightRange = generateRangePage(
        totalPages - rightItemCount + 1,
        totalPages
      );
      return [firstPageIndex, DOTS, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = generateRangePage(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }

  const pages = paginationRange() || []

  const nextPage = Math.min(currentPage + 1, totalPages)
  const prevPage = Math.max(currentPage - 1, SIBLING_COUNT)

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
        {pages.map((page) => {
          if (page === DOTS) {
            return <div className="pagination-dots">&#8230;</div>;
          }

          return (
            <PaginationItem
              key={page}
              currentPage={currentPage}
              page={page}
              pathBase={pathBase}
              rowsPerPage={rowsPerPage}
            />
          )
        })}
      </div>

      <LinkButton
        href={getPaginateUrl({ pathBase, page: nextPage, rowsPerPage })}
        prefetch={false}
      >
        Próximo
        <ArrowRightIcon className="w-6 h-6 ml-2" />
      </LinkButton>
    </nav>
  )
}
