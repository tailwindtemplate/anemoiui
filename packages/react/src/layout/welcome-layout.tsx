import React, { ReactNode } from 'react'
import clsx from 'clsx'

type WelcomeLayout = {
    className?: string
    LeftChildren?: ReactNode
    RightChildren?: ReactNode
}
export const WelcomeLayout = ({ className, LeftChildren, RightChildren }: WelcomeLayout) => {
    return (
        <div className={clsx('w-full h-full flex items-center', className)}>
            {LeftChildren}
            {RightChildren}
        </div>
    )
}
