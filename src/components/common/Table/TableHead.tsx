import { TableHeadProps } from "./types";

export function TableHead<T>({ columns }: TableHeadProps<T>) {
  return (
    <thead className="bg-gray-50">
      <tr>
        {columns.map((column) => (
          <th
            key={column.field}
            scope="col"
            className="px-6 py-4 text-left text-md font-normal text-gray-900 tracking-wider"
          >
            {column.headerName}
          </th>
        ))}
      </tr>
    </thead>
  )
}
