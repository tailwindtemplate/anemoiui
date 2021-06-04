import React from 'react';
import clsx from 'clsx';

type Button = {
    title?: any;
    size?: string;
    type?: any;
}

const SIZE_MAPS: any = {
    XS: 'text-xs',
    SM: 'text-sm',
    BASE: 'text-base',
    LG: 'text-lg',
    XL: 'text-xl',
};

const TYPE_MAPS: any = {
    SECONDARY: 'bg-neutral-50 text-neutral-8000 hover:bg-neutral-500',
};

export default function Button({ title = 'Get Started', size = 'BASE', type = 'PRIMARY'}: Button) {
    return (
        <div className={clsx(SIZE_MAPS[size], TYPE_MAPS[type], 'bg-primary-400 hover:bg-primary-600 text-white px-4 py-2 rounded cursor-pointer max-w-max')}>{title}</div>
    )
}
