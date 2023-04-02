import { EllipsisVerticalIcon } from "@heroicons/react/20/solid"

import { Dropdown, DropdownProps } from "../Dropdown";

export function ActionMenu({ ...props }: DropdownProps) {
  return (
    <Dropdown 
      startIcon={  
        <EllipsisVerticalIcon 
          className="h-5 w-5 text-gray-700" 
          aria-hidden="true" 
        />
      }
      color="none"
      {...props}
    />
  )
}
