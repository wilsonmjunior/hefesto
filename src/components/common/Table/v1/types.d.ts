export interface Column<T> {
  field: string;
  headerName: string;
  valueFormat?: string;
  renderCell?(value: any, row: T): React.ReactNode;
  valueFormatter?(value: unknown): Row[string];
}

export interface PaginationProps {
  currentPage: number;
  pathBase: string;
  rowsPerPage: number;
  totalPages: number;
}

export interface PageProps {
  next?: boolean;
  prev?: boolean;
  page?: number;
}

export interface TableProps<T> {
  columns: Column<T>[];
  data: Page<T>[];
  paginationProps: PaginationProps;
}

export type TableHeadProps<T> = {
  columns: Column<T>[];
}

export type TableBodyProps<T> = {
  columns: Column<T>[];
  data: Page<T>[];
}
