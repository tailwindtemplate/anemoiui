import React from 'react';
import clsx from 'clsx';

type Badge = {
    count?: any;
    size?: string;
    className?: string;
    position?: string;
};

const POSITION: any = {
    'top-left': '-top-1 -left-1',
    'top-right': '-top-1 -right-1',
    'bottom-left': '-bottom-1 -left-1',
    'bottom-right': '-bottom-1 -right-1',
};

export function Badge({ count = 1, className, position = 'top-right' }: Badge) {
    return (
        <span
            className={clsx(
                'flex justify-center items-center rounded-full leading-4 whitespace-no-wrap text-tiny w-4 h-4 border border-white',
                className,
                position && 'absolute',
                POSITION[position],
                count > 9 && 'px-4'
            )}
        >
            {count > 999 ? '999+' : count}
        </span>
    );
}
