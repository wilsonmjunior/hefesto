export interface Column {
  field: string;
  headerName: string;
  valueFormat?: string;
  valueFormatter?(value: unknown): Row[string];
  renderCell?(value: any, row: Record<string, any>): React.ReactNode;
}

export interface TableProps {
  columns: Column[];
  data: Record<string, any>[];
}