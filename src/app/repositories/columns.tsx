'use client'

import { ActionItem, ActionMenu } from "@/components/common/Table/ActionMenu";

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
] as ActionItem[]

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