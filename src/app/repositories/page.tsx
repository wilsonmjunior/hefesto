'use client'

import { Header, Table } from "@/components";
import { IconButton } from "@/components/common/IconButton";
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

export default function Repositories() {
  return (
    <div className="container mx-auto my-10">
      {/* file path pages - path=['Home', 'Current Page'] */}
      <Header title="Repositories" />

      <Table
        data={data} 
        columns={columns}
      />

      <IconButton onClick={() => console.log()} />
    </div>
  )
}
