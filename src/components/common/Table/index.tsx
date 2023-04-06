import { Pagination } from "./Pagination";
import { TableBody } from "./TableBody";
import { TableHead } from "./TableHead";
import { TableProps } from "./types";

import './table.css';

export function Table<T>({ columns, data, paginationProps  }: TableProps<T>) {
  return (
    <>
      <div className="table-container">
        <table className="table-content">
          <TableHead columns={columns} />
          <TableBody columns={columns} data={data} />
        </table>
      </div>

      <Pagination {...paginationProps} />
    </>
  );
};
