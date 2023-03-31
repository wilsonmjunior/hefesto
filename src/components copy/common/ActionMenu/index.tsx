'use client'

import { Fragment } from "react"
import { Menu, Transition } from "@headlessui/react"
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid"
import Link from "next/link";

import './action-menu.css'

export interface ActionItemProps {
  icon?: React.ReactElement;
  title: string;
  href?: string;
  onClick?(): void;
}

interface ActionMenuProps {
  data: ActionItemProps[];
}

export function ActionMenu({ data = [] }: ActionMenuProps) {
  return (
    <Menu as="div" className="menu">
      <div>
        <Menu.Button 
          className="menu-button">
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
            <Menu.Items className="menu-itens">
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
                            className="item-title"
                          >
                            {item.title}
                          </Link> 
                        : <button
                            onClick={item.onClick}
                            className="item-button"
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
