import { Header, Table } from "@/components";
import { columns } from "./columns";

import { FormRepository } from "@/components/pages/repositories/FormRepository";

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
      <Header title="Repositories" paths={['Home', 'Repositories']} />

      <div className="container mx-auto p-7 rounded-lg border">
        <Table
          data={data} 
          columns={columns}
        />
      </div>

      <div className="mt-10">
        <FormRepository />
      </div>
    </div>
  )
}
