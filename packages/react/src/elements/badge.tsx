import React from 'react';
import clsx from 'clsx';

type Badge = {
    count?: any;
    color?: string;
    size?: string;
}

const SIZE_MAPS: any = {
    SM: 'px-2.5 text-xs',
    MD: 'px-3 text-sm',
};

const COLOR_MAPS: any = {
    RED: 'bg-red-100 text-red-800',
    YELLOW: 'bg-yellow-100 text-yellow-800',
    GREEN: 'bg-green-100 text-green-800',
    BLUE: 'bg-blue-100 text-blue-800',
};

export default function Badge({ count = 1, color = 'RED', size = 'MD' }: Badge) {
    return (
        <span
            className={clsx(
                'inline-flex items-center py-0.5 rounded-full font-medium leading-4 whitespace-no-wrap',
                COLOR_MAPS[color],
                SIZE_MAPS[size],
            )}
        >
            {count}
        </span>
    )
}
