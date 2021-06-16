import React from 'react'
import clsx from 'clsx'

type Badge = {
    count?: any;
    className?: string;
    position?: 'top-left' | 'top-right' |'bottom-left' | 'bottom-right' | string;
};

const POSITION: any = {
    'top-left': '-top-1 -left-1',
    'top-right': '-top-1 -right-1',
    'bottom-left': '-bottom-1 -left-1',
    'bottom-right': '-bottom-1 -right-1',
}

export function Badge({ count = '', className, position }: Badge) {
    return (
        <span
            className={clsx(
                'flex justify-center items-center rounded-full leading-4 whitespace-no-wrap text-sm w-4 min-w-max h-4 border border-white',
                className,
                position && 'absolute',
                position && POSITION[position],
                count > 9 && 'px-1'
            )}
        >
            {count > 999 ? '999+' : count}
        </span>
    )
}
