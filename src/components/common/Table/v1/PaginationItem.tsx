import Link from "next/link";

interface URLPaginateParams {
  pathBase: string;
  page: number; 
  rowsPerPage: number;
}

interface PaginateProps extends URLPaginateParams {
  currentPage: number;
}

export function getPaginateUrl({ pathBase, page, rowsPerPage }: URLPaginateParams) {
  return `${pathBase}?page=${page}&size=${rowsPerPage}`
}

export function PaginationItem({ currentPage, page, pathBase, rowsPerPage }: PaginateProps) {
  return (
    <Link
      href={getPaginateUrl({ page, pathBase, rowsPerPage })}
      className={currentPage === page ? 'pagination-item-selected' : 'pagination-item'}
    >
      {page}
    </Link>
  )
}
