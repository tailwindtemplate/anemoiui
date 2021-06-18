import React, { JSXElementConstructor } from 'react'
import clsx from 'clsx'
import { Select } from '../select'

export type PhoneZone = {
    id: string,
    Icon?: JSXElementConstructor<any>,
    iconClassName?: string,
    title: string,
}

export type PhoneInput = {
    zone: Select
    phone: string
    onChange: (phone: string) => void
    className?: string
    inputClassName?: string
    placeholder?: string
    disabled?: boolean
}
export const PhoneInput = ({
    className = 'p-2 border rounded-md focus-within:border-gray-400',
    onChange,
    phone,
    zone,
    inputClassName = 'ml-2',
    placeholder,
    disabled,
}: PhoneInput) => {
    return (
        <div
            className={clsx(
                'flex items-center',
                className,
                disabled && 'disable',
            )}
        >
            <Select className='border-none w-24' {...zone} disabled={disabled} />
            <input
                type="number"
                className={clsx(
                    'focus:outline-none w-full',
                    inputClassName,
                )}
                value={phone}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                disabled={disabled}
            />
        </div>
    )
}
