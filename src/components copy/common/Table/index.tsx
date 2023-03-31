'use client'

import { Pagination } from "./Pagination";
import { TableBody } from "./TableBody";
import { TableHead } from "./TableHead";
import { TableProps } from "./types";

export function Table({ columns, data }: TableProps) {
  return (
    <>
      <div 
        className="bg-white shadow-sm" 
      >
        <table className="min-w-full divide-y divide-gray-200">
          <TableHead columns={columns} />
          <TableBody columns={columns} data={data} />
        </table>
      </div>

      <Pagination />
    </>
  );
};
