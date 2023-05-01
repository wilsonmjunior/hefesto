import { Checkbox } from '../../Checkbox';
import { TableBodyProps } from './types';

export function TableBody<T>({
  data,
  columns,
  select,
  onSelectItem,
}: TableBodyProps<T>) {
  return (
    <tbody className="bg-white">
      {data?.map((item) => (
        <tr key={item.id} className="table-row">
          {select ? (
            <td className="table-data-cell">
              {onSelectItem && (
                <Checkbox onChange={() => onSelectItem(String(item.id))} />
              )}
            </td>
          ) : null}

          {columns.map((column) => (
            <td key={`${item.id}-${column.field}`} className="table-data-cell">
              {column?.renderCell
                ? column.renderCell(item[column.field], item)
                : item[column.field]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}
