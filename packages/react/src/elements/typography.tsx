import React from 'react'
import clsx from 'clsx'

type Heading = {
    className?: string
}

export function Heading1({ children, className }: React.PropsWithChildren<Heading>) {
    return (<h1 className={clsx('text-4xl font-bold', className)}>{children}</h1>)
}

export function Heading2({ children, className }: React.PropsWithChildren<Heading>) {
    return (<h2 className={clsx(className, 'text-3xl font-medium')}>{children}</h2>)
}

export function Heading3({ children, className }: React.PropsWithChildren<Heading>) {
    return (<h3 className={clsx(className, 'text-2xl font-medium')}>{children}</h3>)
}

export function Heading4({ children, className }: React.PropsWithChildren<Heading>) {
    return (<h4 className={clsx(className, 'text-xl font-medium')}>{children}</h4>)
}

export function Heading5({ children, className }: React.PropsWithChildren<Heading>) {
    return (<h5 className={clsx(className, 'text-lg font-medium')}>{children}</h5>)
}

export function Heading6({ children, className }: React.PropsWithChildren<Heading>) {
    return (<h6 className={clsx(className, 'text-md font-medium')}>{children}</h6>)
}

export function Subtitle1({ children, className }: React.PropsWithChildren<Heading>) {
    return (<div className={clsx(className, 'text-sm font-medium')}>{children}</div>)
}

export function Subtitle2({ children, className }: React.PropsWithChildren<Heading>) {
    return (<div className={clsx(className, 'text-xs')}>{children}</div>)
}

export function Body1({ children, className }: React.PropsWithChildren<Heading>) {
    return (<div className={clsx(className, 'text-sm font-medium')}>{children}</div>)
}

export function Body2({ children, className }: React.PropsWithChildren<Heading>) {
    return (<div className={clsx(className, 'text-xs')}>{children}</div>)
}
