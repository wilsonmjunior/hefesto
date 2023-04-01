import { Dropdown, Header, Table } from "@/components";
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
          data={[
            { title: "Item 1" },
            { title: "Item 2" }
          ]}
          startIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>

          }
          label="Options"
        />
      </div>
    </div>
  )
}
