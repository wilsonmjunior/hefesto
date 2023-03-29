import { TableProps as TableHeadProps } from "./types";

export function TableHead({ columns }: Pick<TableHeadProps, 'columns'>) {
  return (
    <thead className="bg-gray-50">
      <tr>
        {columns.map((column) => (
          <th
            key={column.field}
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            {column.headerName}
          </th>
        ))}
      </tr>
    </thead>
  )
}
