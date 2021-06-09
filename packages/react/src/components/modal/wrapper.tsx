import React, { Fragment, PropsWithChildren } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import clsx from 'clsx';

type Wrapper = {
    open: boolean
    setOpen: (open: boolean) => void
    theme?: string
}
export function Wrapper({ children, open, setOpen, theme = 'light' }: PropsWithChildren<Wrapper>) {

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" static className="fixed z-10 inset-0 overflow-y-auto" open={open} onClose={setOpen}>
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
                    </Transition.Child>
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className={clsx('relative inline-block align-bottom rounded-sm px-4 pt-5 pb-4 text-left shadow-xl transform transition-all sm:my-8 sm:align-middle max-w-sm sm:w-full sm:p-6 lg:max-w-lg', theme == 'light' ?  'bg-white text-gray-400' : 'bg-black text-white')}>
                            <div className="absolute top-1 right-1">
                                <button
                                    type="button"
                                    className="inline-flex justify-center px-2 py-1 text-sm font-medium text-gray-200 border border-transparent rounded hover:text-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                    onClick={() => setOpen(false)}
                                >
                                    X
                                </button>
                            </div>
                            {children}
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
