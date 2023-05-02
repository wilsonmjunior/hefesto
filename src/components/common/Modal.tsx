import { Fragment, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { Button } from "./Button"
import { Paragraph } from "./Paragraph"

interface AlertDialogProps {

}

export function Modal({ }: AlertDialogProps) {
  let [isOpen, setIsOpen] = useState(true)

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setIsOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-blue-500 bg-opacity-50 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg py-4"
              >
                <Dialog.Title
                  as="h3"
                  className="text-base font-semibold leading-6 text-gray-900 px-4"
                >
                  Deactivate account
                </Dialog.Title>

                <Paragraph className="px-4 mt-1 text-lg">
                  This will permanently deactivate your account
                </Paragraph>

                <div className="flex justify-end px-4 mt-4">
                  <Button title="Deactivate" />
                  <Button className="bg-red-600" title="Cancel" />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}