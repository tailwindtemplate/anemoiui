import clsx from 'clsx'
import React, { PropsWithChildren } from 'react'
type CardWrapper = {
  className?: string
}
export const CardWrapper = ({ children, className }: PropsWithChildren<CardWrapper>) => {
    return (
        <div className={clsx('bg-gray-50 rounded-3xl p-5', className)}>
            {children}
        </div>
    )
}
