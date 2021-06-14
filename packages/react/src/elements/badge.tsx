import React from 'react';
import clsx from 'clsx';

type Badge = {
    count?: any;
    size?: string;
    className?: string;
    position?: string;
};

export function Badge({ count = 1, size = 'MD', className, position }: Badge) {
    return (
        <span
            className={clsx(
                'flex justify-center items-center rounded-full leading-4 whitespace-no-wrap text-tiny w-4 h-4',
                className,
                position && 'absolute',
                count > 9 && 'px-3'
            )}
        >
            {count > 99 ? '99+' : count}
        </span>
    );
}
