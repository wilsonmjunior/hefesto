'use client'

import { Header, Table } from "@/components"
import { PaginationProps } from "@/components/common/Table/v2/types"
import { columns } from "./columns"

interface RepositoriesProps {
  items: unknown[];
  paginationProps: PaginationProps;
}

export function RepoList({ items, paginationProps }: RepositoriesProps) {
  return (
    <div className="container mx-auto my-10">
      <Header title="Repositórios" paths={['Home', 'Repositories']} />

      <Table
        data={items}
        columns={columns}
        paginationProps={paginationProps}
      />
    </div>
  )
}