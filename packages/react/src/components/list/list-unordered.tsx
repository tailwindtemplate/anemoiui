import React, { HTMLAttributes, PropsWithChildren } from 'react'
import clsx from 'clsx'

type ListWrapperProps = HTMLAttributes<HTMLElement>

export function ListUnordered({ children, className }: PropsWithChildren<ListWrapperProps>): JSX.Element {
    return <ul className={clsx(className, 'block')}>{children}</ul>
}
