import React, { PropsWithChildren, useMemo } from 'react';
import { UserGroupIcon } from "@heroicons/react/outline";
import clsx from "clsx";
import { Avatar, Badge } from '../elements';

type Avatars = {
    avatars?: string[];
    newMessage?: number | string;
    className?: string
    size?: 'md' | 'lg' | string
};

const sizeClasses: Record<string, { wrapper: string, item: string }> = {
    md: {
        wrapper: 'w-12 h-12',
        item: 'w-8 h-8'
    },
    lg: {
        wrapper: 'w-28 h-28',
        item: 'w-20 h-20'
    }
}

export function Avatars({ avatars = [], newMessage, children, className, size = 'md' }: PropsWithChildren<Avatars>) {
    const sizeClass = useMemo(() => (sizeClasses[size]),[size])
    if (!avatars?.length) {
        return (
            <div className={clsx('relative bg-gray-200 rounded-full flex justify-center items-center text-white', sizeClass.wrapper, className)}>
                <UserGroupIcon className={sizeClass.item} />
                {newMessage && <Badge count={newMessage} className='bg-red-600 text-white left-0 bottom-0 absolute z-10'  />}
                {children}
            </div>
        )
    }

    return (
        <div className={clsx('relative', className, sizeClass.wrapper)}>
            <div>
                <Avatar size="" src={avatars[0]} isRounded className={clsx('border border-white', sizeClass.item)} />
                <div className='absolute bottom-0 right-0'><Avatar size="" src={avatars[1]} isRounded className={clsx('border border-white', sizeClass.item)} /></div>
            </div>
            {newMessage && <Badge count={newMessage} className='bg-red-600 text-white left-0 bottom-0 absolute z-10'  />}
            {children}
        </div>
    );
}
