'use client'

import { Header, Table } from "@/components";
import { columns } from "./columns";

const data = [
  {
    id: 1,
    name: "Product 1",
    description: "This is a product",
    producers: ["Producer 1", "Producer 2"],
    createdAt: "2022-03-29",
  },
  {
    id: 2,
    name: "Product 2",
    description: "This is another product",
    producers: ["Producer 3", "Producer 4"],
    createdAt: "2022-03-28",
  },
];

const TesteIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
)

export default function Repositories() {
  return (
    <div className="container mx-auto my-10">
      <Header title="Repositories" paths={['Home', 'Repositories']} />

      <Table
        data={data} 
        columns={columns}
      />
    </div>
  )
}
