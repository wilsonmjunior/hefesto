import { TableProps as TableBodyProps } from "./types"

export function TableBody({ data, columns }: TableBodyProps) {
  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {data.map((item) => (
        <tr key={item.id}>
          {columns.map((column) => (
            <td
              key={`${item.id}-${column.field}`}
              className="px-6 py-4 whitespace-nowrap text-sm font-normal text-gray-600 align-middle"
            >
              {
                column?.renderCell 
                ? column.renderCell(item[column.field], item) 
                : item[column.field]
              }
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}
