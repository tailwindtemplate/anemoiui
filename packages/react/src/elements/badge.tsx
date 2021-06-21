import React from 'react'
import clsx from 'clsx'

export type Badge = {
    count?: any
    className?: string
    position?: 'top-left' | 'top-right' |'bottom-left' | 'bottom-right' | string
    positionData?: Record<string, string>
    size?: 'sm' | 'md' | 'lg' | string
    sizeData?: Record<string, string>
};

const POSITION: Record<string, string> = {
    'top-left': '-top-1 -left-1',
    'top-right': '-top-1 -right-1',
    'bottom-left': '-bottom-1 -left-1',
    'bottom-right': '-bottom-1 -right-1',
}
const SIZE: Record<string, string> = {
    'xs': 'text-xs p-1 w-4 h-4',
    'sm': 'text-sm p-1 w-5 h-5',
    'md': 'text-base p-1 w-6 h-6',
    'lg': 'text-lg p-1 w-7 h-7',
    'xl': 'text-xl p-1 w-8 h-8',
}

export function Badge({ count = '', className = 'border border-white', position, positionData = POSITION, size = 'md', sizeData = SIZE }: Badge) {
    return (
        <span
            className={clsx(
                'flex justify-center items-center min-w-max rounded-full whitespace-no-wrap',
                className,
                position && 'absolute',
                position && positionData[position],
                size && sizeData[size],
            )}
        >
            {count > 999 ? '999+' : count}
        </span>
    )
}
