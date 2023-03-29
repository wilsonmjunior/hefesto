import { EllipsisIcon } from "@/assets/icons";
import { Table } from "@/components/common/Table";

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

const columns = [
  { field: 'id', headerName: 'Id' },
  { field: 'name', headerName: 'Name' },
  { field: 'description', headerName: 'Description' },
  { field: 'producers', headerName: 'Producers', renderCell: (value: string[]) => value.join(", ") },
  { field: 'createdAt', headerName: 'Created At' },
  {
    field: 'actions',
    headerName: 'Actions',
    renderCell: (value: any, row: Record<string, any>) => (
      <button>
        <EllipsisIcon />
      </button>
    ),
  },
];

export default function Repositories() {
  return (
    <div className="container mx-auto my-10">
      <Table 
        data={data} 
        columns={columns}
      />
    </div>
  )
}