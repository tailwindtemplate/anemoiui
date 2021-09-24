import React, { AnchorHTMLAttributes, PropsWithChildren } from 'react'
import { BaseButtonProps } from './types'
import clsx from 'clsx'

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & BaseButtonProps

export function LinkButton({ children, size = 'md', ...attrs }: PropsWithChildren<LinkButtonProps>): JSX.Element {
    return (
        <a
            {...attrs}
            className={clsx(
                'inline-block bg-gray-200',
                { 'px-2 py-1 rounded-sm': size === 'sm' },
                { 'px-4 py-2 rounded-sm': size === 'md' },
                { 'px-8 py-4 rounded-sm': size === 'lg' },
            )}
        >
            {children}
        </a>
    )
}
