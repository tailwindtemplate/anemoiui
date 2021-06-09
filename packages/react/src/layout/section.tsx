import clsx from 'clsx'
import React, { PropsWithChildren } from 'react'

type Section = {
    className?: string
    narrow?: boolean
    wide?: boolean
    normal?: boolean
}

const classes = 'mx-auto'

export const Section = ({ children, className = '', narrow = false, wide = false, normal = true }: PropsWithChildren<Section>) => {
    return (
        <div className={clsx(classes, className, { 'max-w-7xl': narrow }, { 'max-w-screen-2xl': wide }, { 'bg-white rounded-md p-4 mt-4': normal } )}>
            {children}
        </div>
    )
}
