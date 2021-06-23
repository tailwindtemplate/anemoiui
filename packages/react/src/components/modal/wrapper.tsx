import React, { Fragment, PropsWithChildren, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import clsx from 'clsx'

type Wrapper = {
    open: boolean
    setOpen: (open: boolean) => void
    theme?: string
    size?: string
}
const SIZE_MAPS: Record<string, string> = {
    sm: 'max-w-sm sm:w-full lg:max-w-lg px-4 pt-5 pb-4 sm:my-8 sm:p-6',
    md: 'text-base px-6 py-2',
    lg: 'text-sm md:text-lg px-2 md:px-8 py-2',
    full: 'w-full h-full max-w-full max-h-full',
}

export function Wrapper({ children, open, setOpen, theme = 'light', size = 'sm'}: PropsWithChildren<Wrapper>) {
    const ref = useRef(null)

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" static className="fixed z-50 inset-0 overflow-y-auto" open={open} onClose={setOpen} initialFocus={ref}>
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
                        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
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
                        <div className={clsx('relative inline-block align-bottom rounded-sm text-left shadow-xl transform transition-all sm:align-middle', theme == 'light' ? 'bg-white text-gray-400' : 'bg-black text-white', SIZE_MAPS[size])}>
                            <button className='hidden' ref={ref}>Hidden</button>
                            {children}
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
