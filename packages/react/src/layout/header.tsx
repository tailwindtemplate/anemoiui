import React from 'react'
import { Dropdown } from 'elements/dropdown'

type Header = {
    mainNavigation: any[]
}

export const Header = ({ mainNavigation }: Header) => {
    return (
        <div className="bg-primary-700 py-3">
            <nav
                className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
                aria-label="Global"
            >
                <div className="flex items-center flex-1">
                    <div className="flex items-center justify-between w-full md:w-auto">
                        <a href="/">Logo</a>
                    </div>
                    <div className="flex space-x-8 md:ml-10">
                        {mainNavigation.map((item) => (
                            (!Array.isArray(item?.items)) ? <a
                                key={item.name}
                                href={item.href}
                                className="text-base font-medium text-white hover:text-gray-300"
                            >
                                {item.name}
                            </a> : <Dropdown label={item.name} items={item.items} />
                        ))}
                    </div>
                </div>
            </nav>
        </div>
    )
}
