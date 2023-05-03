export type SearchParamsType = {
  searchParams?: { [key: string]: string | string[] | undefined };
}

export type PaginationProps = {
  rowsPerPage?: number;
  searchParams: SearchParamsType;
};

export function getPageProps({
  rowsPerPage = 5,
  searchParams,
}: PaginationProps) {
  const page =
    searchParams && searchParams['page'] ? Number(searchParams['page']) : 0;
  const size =
    searchParams && searchParams['size']
      ? Number(searchParams['size'])
      : rowsPerPage;

  return { page, size };
}
