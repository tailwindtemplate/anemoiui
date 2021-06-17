import React, { PropsWithChildren } from 'react'
import clsx from 'clsx'

type AvatarWrapper = {
    hasBorder?: boolean
    className: string
}
export const AvatarWrapper = ({ hasBorder, className, children }: PropsWithChildren<AvatarWrapper>) => {
    return (
        <div className={clsx(hasBorder && 'border-2 border-secondary-600 w-min', className)}>
            {children}
        </div>
    )
}
