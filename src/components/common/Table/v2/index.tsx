import { Pagination } from './Pagination'
import { TableBody } from './TableBody'
import { TableHead } from './TableHead'
import { TableProps } from './types'

import './table.css'

export function Table<T>({
  columns,
  data,
  paginationProps,
  select,
  onSelectAll,
  onSelectItem,
}: TableProps<T>) {
  return (
    <div className="table-container">
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
  )
}
