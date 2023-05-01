'use client'

import { Fragment } from "react"
import { Menu, Transition } from "@headlessui/react"
import Link from "next/link";

import { BaseButton, BaseButtonProps } from "../BaseButton";
import './dropdown.css'

export interface DropdownItemProps {
  icon?: React.ReactElement;
  title: string;
  href?: string;
  onClick?(): void;
}

export interface DropdownProps extends Omit<BaseButtonProps, 'children' | 'onClick'> {
  label?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  data: DropdownItemProps[];
}

export function Dropdown({
  label,
  startIcon,
  endIcon,
  className = '',
  data = [],
  ...othersProps
}: DropdownProps) {
  return (
    <Menu as="div" className="dropdown">
      <div>
        <Menu.Button
          as={BaseButton}
          className="p-2 w-full flex flex-1 gap-1"
          {...othersProps}
        >
          {!endIcon && startIcon ? <div>{startIcon}</div> : ''}
          {label}
          {!startIcon && endIcon ? <div>{endIcon}</div> : ''}
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
            <Menu.Items className="dropdown-itens">
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
