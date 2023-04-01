'use client'

import { Dropdown, DropdownItemProps, IconButton } from "@/components"
import { Column } from "@/components/common/Table/types";
import { HeartIcon } from "@heroicons/react/20/solid";

const itensMenu = [
  { 
    title: "Home", 
    href: '/',
  },
  { 
    title: "Delete", 
    onClick() {
      console.log("teste delete")  
    }, 
  },
] as DropdownItemProps[]

export const columns = [
  { 
    field: 'id', 
    headerName: 'Id',
  },
  { 
    field: 'name', 
    headerName: 'Name',
  },
  { 
    field: 'description', 
    headerName: 'Description',
  },
  { 
    field: 'producers', 
    headerName: 'Producers', 
    renderCell: (value: string[]) => value.join(", "),
  },
  { 
    field: 'createdAt', 
    headerName: 'Created At',
  },
  {
    field: '', 
    renderCell() {
      return (
        <IconButton onClick={() => console.log()} icon={<HeartIcon width={14} />} variant="outlined" color="error" className="rounded-full" />
      )
    }
  },
  {
    field: 'actions',
    headerName: '',
    renderCell(value: any, row: Record<string, any>) {
      return (
        <Dropdown data={itensMenu} />
      )
    },
  },
] as Column[];