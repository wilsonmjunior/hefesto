import { Pagination } from './Pagination';
import { TableBody } from './TableBody';
import { TableHead } from './TableHead';
import { TableProps } from './types';

import './table.css';

export function Table<T>({
  columns,
  data,
  paginationProps,
  title,
  select,
  onSelectAll,
  onSelectItem,
}: TableProps<T>) {
  return (
    <div className="table-container">
      <h2 className="px-6 py-5">{title}</h2>

      <table className="table-content">
        <TableHead
          columns={columns}
          select={select}
          onSelectAll={onSelectAll}
        />
        <TableBody
          columns={columns}
          data={data}
          select={select}
          onSelectItem={onSelectItem}
        />
      </table>

      <Pagination {...paginationProps} />
    </div>
  );
}
