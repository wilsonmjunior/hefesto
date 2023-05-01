import { Checkbox } from '../../Checkbox';
import { SortColumn } from './SortColumn';
import { TableHeadProps } from './types';

export function TableHead<T>({
  columns,
  select,
  onSelectAll,
}: TableHeadProps<T>) {
  return (
    <thead className="table-header">
      <tr>
        {select ? (
          <th className="table-header-cell">
            {onSelectAll && <Checkbox onChange={onSelectAll} />}
          </th>
        ) : null}

        {columns.map((column) => (
          <th key={column.field} scope="col" className="table-header-cell">
            <div className="table-header-cell-column">
              <div>{column.headerName}</div>
              {column.sort ? (
                <div className="ml-2">
                  <SortColumn field={column.field} />
                </div>
              ) : null}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
}
