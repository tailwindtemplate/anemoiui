import React, { HTMLAttributes, PropsWithChildren } from 'react'
import clsx from 'clsx'

type CardProps = HTMLAttributes<HTMLElement>

export function Card({ children, className }: PropsWithChildren<CardProps>): JSX.Element {
    return (
        <div className={clsx('border border-gray-200 max-w-7xl text-center px-8 py-4 rounded-md', className)}>
            {children}
        </div>
    )
}
