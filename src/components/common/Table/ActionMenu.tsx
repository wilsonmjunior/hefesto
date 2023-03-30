import { Fragment } from "react"
import { Menu, Transition } from "@headlessui/react"
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid"
import Link from "next/link";

export interface ActionItem {
  icon?: React.ReactElement;
  title: string;
  href?: string;
  onClick?: () => void;
}

interface ActionMenuProps {
  data: ActionItem[];
}

export function ActionMenu({ data = [] }: ActionMenuProps) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button 
          className="inline-flex justify-center gap-x-1.5 rounded-md p-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50">
          <EllipsisVerticalIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      {
        data.length ? (
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-0 w-56 origin-top-right shadow-sm rounded-md bg-white shadow-lg focus:outline-none">
              <div className="py-1">
                {
                  data?.map(({ ...item }, index) => (
                    <Menu.Item
                      key={index}
                    >
                      {
                        item.href ? 
                          <Link 
                            href={item.href}
                            className="text-gray-700 block px-4 py-2 text-sm"
                          >
                            {item.title}
                          </Link> 
                        : <button
                            onClick={item.onClick}
                            className="w-full text-left text-gray-700 block px-4 py-2 text-sm"
                          >
                            {item.title}
                          </button>
                      }
                    </Menu.Item>
                  ))
                }
              </div>
            </Menu.Items>
          </Transition>
        ) : null
      } 
    </Menu>
  )
}
