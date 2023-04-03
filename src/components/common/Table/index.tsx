'use client'

import { Pagination } from "./Pagination";
import { TableBody } from "./TableBody";
import { TableHead } from "./TableHead";
import { TableProps } from "./types";

import './table.css'

export function Table({ columns, data }: TableProps) {
  return (
    <>
      <div className="table-container">
        <table className="table-content">
          <TableHead columns={columns} />
          <TableBody columns={columns} data={data} />
        </table>
      </div>

      <Pagination />
    </>
  );
};
