import React, { JSXElementConstructor, useMemo } from 'react'
import clsx from 'clsx'
import { Button } from 'elements'

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
                <Button title={cancel.label} onClick={cancel.onClick} className={cancel.className} IconLeft={cancel.IconLeft} IconRight={cancel.IconRight} />
            )}
            {confirm && (
                <Button title={confirm.label} onClick={confirm.onClick} type='primary' className={clsx('w-full', confirm.className)} IconLeft={confirm.IconLeft} IconRight={confirm.IconRight} />
            )}
        </div>
    )
}
