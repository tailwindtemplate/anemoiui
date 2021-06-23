import React, { JSXElementConstructor } from 'react'
import clsx from 'clsx'

type Header = {
    Icon?: JSXElementConstructor<any>
    iconClassName?: string
    label: string,
    labelClassName?: string
    theme?: string
}

export const Header = ({ Icon, label, theme = 'light', labelClassName, iconClassName }: Header) => {
    return (
        <div className={clsx('flex items-center flex-col mb-4', theme === 'light' ? 'text-gray-600' : 'text-white')}>
            {Icon && <Icon className={iconClassName} />}
            <h2 className={clsx('text-2xl', labelClassName)}>{label}</h2>
        </div>
    )
}
