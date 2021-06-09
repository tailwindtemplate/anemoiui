import clsx from 'clsx'
import React, { PropsWithChildren } from 'react'

type Layout = {
    className?: string
}
export const Layout = ({ children, className = '' }: PropsWithChildren<Layout>) => {
    return <div className={clsx('min-h-screen relative overflow-hidden', className)}>{children}</div>
}
