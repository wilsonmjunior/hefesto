import { TableBodyProps } from "./types"

export function TableBody<T>({ data, columns }: TableBodyProps<T>) {
  return (
    <tbody className="bg-white">
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
