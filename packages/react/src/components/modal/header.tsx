import React, { JSXElementConstructor } from 'react'
import clsx from 'clsx'

type Header = {
    Icon?: JSXElementConstructor<any>
    label: string
    theme?: string
}

export const Header = ({ Icon, label, theme = 'light' }: Header) => {
    return (
        <div className={clsx('flex items-center flex-col mb-4', theme === 'light' ? 'text-gray-600' : 'text-white')}>
            {Icon && <Icon />}
            <h2 className="text-2xl">{label}</h2>
        </div>
    )
}
