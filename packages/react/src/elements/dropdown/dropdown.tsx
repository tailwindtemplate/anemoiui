import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { ChevronDownIcon } from '@heroicons/react/outline'

type Dropdown = {
    label: string
    items: { name: string, href?: string }[]
    theme?: 'dark' | 'light'
}
export const Dropdown = ({ label, items, theme = 'light' }: Dropdown) => {
    return (
        <Menu as="div" className="relative inline-block text-left">
            {({ open }) => (
                <>
                    <div>
                        <Menu.Button className={clsx('text-base font-medium hover:text-primary-300 focus:outline-none border p-2 rounded-md', theme == 'dark' ? 'text-white' : 'text-dark')}>
                            <span className="sr-only">Open options</span>
                            <span className="mr-1 flex items-center justify-center">{ label }<ChevronDownIcon className='w-4 h-4 ml-2' /></span>
                        </Menu.Button>
                    </div>
                    <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items
                            static
                            className="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                        >
                            <div className="py-1">
                                {items.map((item, index) => (
                                    <div key={`${item.name}-${index}`}>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href={item?.href}
                                                    className={clsx(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm',
                                                    )}
                                                >
                                                    {item?.name}
                                                </a>
                                            )}
                                        </Menu.Item>
                                    </div>
                                ))}
                            </div>
                        </Menu.Items>
                    </Transition>
                </>
            )}
        </Menu>
    )
}
