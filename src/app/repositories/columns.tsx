'use client'

import { ActionItemProps, ActionMenu } from "@/components";

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
  { field: 'id', headerName: 'Id' },
  { field: 'name', headerName: 'Name' },
  { field: 'description', headerName: 'Description' },
  { field: 'producers', headerName: 'Producers', renderCell: (value: string[]) => value.join(", ") },
  { field: 'createdAt', headerName: 'Created At' },
  {
    field: 'actions',
    headerName: '',
    renderCell: (value: any, row: Record<string, any>) => {
      return (
        <ActionMenu data={itensMenu} />
      )
    },
  },
];