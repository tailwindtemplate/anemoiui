import React from 'react'
import clsx from 'clsx'

type Heading = {
    className?: string
}

export function Heading1({ children, className }: React.PropsWithChildren<Heading>) {
    return (<h1 className={clsx('h1', className)}>{children}</h1>)
}

export function Heading2({ children, className }: React.PropsWithChildren<Heading>) {
    return (<h2 className={clsx(className, 'h2')}>{children}</h2>)
}

export function Heading3({ children, className }: React.PropsWithChildren<Heading>) {
    return (<h3 className={clsx(className, 'h3')}>{children}</h3>)
}

export function Heading4({ children, className }: React.PropsWithChildren<Heading>) {
    return (<h4 className={clsx(className, 'h4')}>{children}</h4>)
}

export function Heading5({ children, className }: React.PropsWithChildren<Heading>) {
    return (<h5 className={clsx(className, 'h5')}>{children}</h5>)
}

export function Heading6({ children, className }: React.PropsWithChildren<Heading>) {
    return (<h6 className={clsx(className, 'h6')}>{children}</h6>)
}

export function Subtitle1({ children, className }: React.PropsWithChildren<Heading>) {
    return (<div className={clsx(className, 'sub1')}>{children}</div>)
}

export function Subtitle2({ children, className }: React.PropsWithChildren<Heading>) {
    return (<div className={clsx(className, 'sub2')}>{children}</div>)
}

export function Body1({ children, className }: React.PropsWithChildren<Heading>) {
    return (<div className={clsx(className, 'body1')}>{children}</div>)
}

export function Body2({ children, className }: React.PropsWithChildren<Heading>) {
    return (<div className={clsx(className, 'body2')}>{children}</div>)
}
