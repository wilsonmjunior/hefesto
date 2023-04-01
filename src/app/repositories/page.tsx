import { Dropdown, Header, Table } from "@/components";
import { Bars3Icon } from "@heroicons/react/24/solid";
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
      <Header title="Repositories" paths={['Home', 'Repositories']} />

      <Table
        data={data} 
        columns={columns}
      />

      <div className="flex justify-end mt-10">
        <Dropdown 
          label="Options"
          variant="outlined"
          data={[
            { title: "Item 1" },
            { title: "Item 2" }
          ]}
          startIcon={
            <Bars3Icon className="h-5 w-5 text-blue-700" />
          }
        />
      </div>
    </div>
  )
}
