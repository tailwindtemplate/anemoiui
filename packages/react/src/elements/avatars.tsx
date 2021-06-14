import React from 'react';
import { Avatar } from 'elements/avatar';
import { Badge } from 'elements/badge';
import { UserGroupIcon } from "@heroicons/react/outline";
import clsx from "clsx";

type Avatars = {
    members?: Array<any>;
    newMessage?: number | string;
};

export function Avatars({ members = [], newMessage }: Avatars) {

    return (
        <div className={clsx('w-12 h-12 relative', !members?.length && 'bg-gray-200 rounded-full flex justify-center items-center text-white')}>
            {members?.length ? <>
                <Avatar size="xs" src={members[0].src} isRounded className='border border-white' />
                <div className='absolute bottom-0 right-0'><Avatar size="xs" src={members[1].src} isRounded className='border border-white' /></div>
            </> : <UserGroupIcon className='w-8 h-8' />}
            <Badge count={newMessage} className='bg-red-600 text-white left-0 bottom-0 absolute z-10'  />
        </div>
    );
}
