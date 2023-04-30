export interface Column<T> {
  field: string;
  headerName: string;
  sort?: boolean;
  valueFormat?: string;
  renderCell?(value: unknown, row: T): React.ReactNode;
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
  page?: number;
  prev?: boolean;
}

export type SortDirection = 'asc' | 'desc';

export interface TableProps<T> {
  columns: Column<T>[];
  data: Page<T>[];
  paginationProps: PaginationProps;
  searchPlaceholder?: string;
  select?: boolean;
  title: string;
  onSelectAll?(): void;
  onSelectItem?(item: string): void;
}

export type TableHeadProps<T> = {
  columns: Column<T>[];
  select?: boolean;
  onSelectAll?(): void;
};

export type TableBodyProps<T> = {
  columns: Column<T>[];
  data: Page<T>[];
  select?: boolean;
  onSelectItem?(item: string): void;
};
