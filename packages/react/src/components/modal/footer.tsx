import React, { JSXElementConstructor, useMemo } from 'react';
import clsx from 'clsx';

type Footer = {
    type?: 'left' | 'right' | 'center' | 'between' | string
    theme?: string
    confirm?: { onClick: () => void, label: string, IconLeft?: JSXElementConstructor<any>, IconRight?: JSXElementConstructor<any>, className?: string }
    cancel?: { onClick: () => void, label: string, IconLeft?: JSXElementConstructor<any>, IconRight?: JSXElementConstructor<any>, className?: string }
}

const renderType = (type: string) => {
    switch (type) {
        case 'center':
            return 'items-center flex-col-reverse'
        case 'right':
            return 'justify-end space-x-4'
        case 'left':
            return 'justify-start space-x-4'
        default:
            return 'justify-between space-x-4'
    }
}

export const Footer = ({ type = 'between', theme, confirm, cancel }: Footer) => {
    const typeClass = useMemo(() => renderType(type), [type])
    return (
        <div className={clsx('flex mt-2', typeClass)}>
            {cancel && (
                <button onClick={cancel.onClick} className={clsx('mt-2 text-gray-600', cancel.className)}>
                    {cancel.IconLeft && <cancel.IconLeft />}
                    {cancel.label}
                    {cancel.IconRight && <cancel.IconRight />}
                </button>
            )}
            {confirm && (
                <button onClick={confirm.onClick} className={clsx('bg-primary-400 text-white mt-2', confirm.className)}>
                    {confirm.IconLeft && <confirm.IconLeft />}
                    {confirm.label}
                    {confirm.IconRight && <confirm.IconRight />}
                </button>
            )}
        </div>
    )
}
