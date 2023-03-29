export interface Column {
  field: string;
  headerName: string;
  valueFormat?: string;
  renderCell?: (value: any, row: Record<string, any>) => React.ReactNode;
}

export interface TableProps {
  columns: Column[];
  data: Record<string, any>[];
}