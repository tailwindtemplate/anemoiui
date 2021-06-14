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
            {members.length ? members.slice(0, 2).map((item, index) => {
                return <Avatar key={index} size="xs" src={item.src} isRounded className='avatar border border-white' />;
            }) : <UserGroupIcon className='w-8 h-8' />}
            <Badge count={newMessage} className='bg-red-600 text-white left-0 bottom-0 absolute z-10'  />
        </div>
    );
}
