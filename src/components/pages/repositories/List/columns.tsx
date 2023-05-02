'use client'

import { ActionItem } from "@/components/common/Table/v2/ActionTable";
import { Column } from "@/components/common/Table/v2/types";

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
] as Column<unknown>[];
