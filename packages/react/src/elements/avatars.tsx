import React, { PropsWithChildren } from 'react';
import { UserGroupIcon } from "@heroicons/react/outline";
import clsx from "clsx";
import { Avatar, Badge } from '../elements';

type Avatars = {
    avatars?: string[];
    newMessage?: number | string;
    className?: string
};

export function Avatars({ avatars = [], newMessage, children, className }: PropsWithChildren<Avatars>) {
    if (!avatars?.length) {
        return (
            <div className={clsx('w-12 h-12 relative bg-gray-200 rounded-full flex justify-center items-center text-white', className)}>
                <UserGroupIcon className='w-8 h-8' />
                {newMessage && <Badge count={newMessage} className='bg-red-600 text-white left-0 bottom-0 absolute z-10'  />}
                {children}
            </div>
        )
    }

    return (
        <div className={clsx('w-12 h-12 relative', className)}>
            <div>
                <Avatar size="xs" src={avatars[0]} isRounded className='border border-white' />
                <div className='absolute bottom-0 right-0'><Avatar size="xs" src={avatars[1]} isRounded className='border border-white' /></div>
            </div>
            {newMessage && <Badge count={newMessage} className='bg-red-600 text-white left-0 bottom-0 absolute z-10'  />}
            {children}
        </div>
    );
}
