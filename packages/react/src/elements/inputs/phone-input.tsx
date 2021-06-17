import React, { JSXElementConstructor } from 'react'
import clsx from 'clsx'
import { Select } from '../select'

export type PhoneZone = {
    id: string,
    Icon?: JSXElementConstructor<any>,
    iconClassName?: string,
    title: string,
}

type PhoneInput = {
    onZoneSelect: (v: PhoneZone) => void
    phoneZone: PhoneZone
    zoneClassname?: string
    phone: string
    onChange: (phone: string) => void
    className?: string
    inputClassName?: string
    phoneData: PhoneZone[]
    placeholder?: string
    disabled?: boolean
}
export const PhoneInput = ({
    className,
    zoneClassname = 'border-none',
    onZoneSelect,
    onChange,
    phone,
    phoneZone,
    inputClassName,
    phoneData,
    placeholder,
    disabled,
    ...rest
}: PhoneInput & Partial<Select>) => {
    return (
        <div
            className={clsx(
                'border-gray-200 p-2 focus-within:border-gray-400 border rounded-xl flex items-center',
                className,
                disabled && 'bg-gray-100 pointer-events-none text-gray-400'
            )}
        >
            <Select disabled={disabled} className={zoneClassname} data={phoneData} onSelect={onZoneSelect} value={phoneZone} {...rest} />
            <input
                type="number"
                className={clsx(
                    'text-sm focus:outline-none w-full placeholder-neutral-300 rounded-xl p-1',
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
