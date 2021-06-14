import React, { JSXElementConstructor, useMemo } from 'react';
import clsx from 'clsx';

type MessageStatus = {
    status: string
    time: string
    items?: Record<string, JSXElementConstructor<any>>
    className?: string
}
export const MessageStatus = ({ items, status, time, className }: MessageStatus) => {
    const Icon = useMemo(() => items?.[status], [status, items])
    return (
        <div className={clsx('flex text-sm items-center mt-2', className)}>
            {Icon && <Icon className="w-4 h-4 mr-2" />}
            <span className="text-gray-400">{`${status}, ${time}`}</span>
        </div>
    )
}
