'use client'

import { ActionItemProps, ActionMenu, IconButton } from "@/components"
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
] as ActionItemProps[]

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
        <ActionMenu data={itensMenu} />
      )
    },
  },
] as Column[];