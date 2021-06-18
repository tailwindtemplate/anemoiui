import React, { JSXElementConstructor, PropsWithChildren, useMemo } from 'react'
import { UserGroupIcon } from '@heroicons/react/outline'
import clsx from 'clsx'
import { Avatar, Badge } from '../../elements'

type Avatars = {
    src?: string[];
    newMessage?: number | string;
    className?: string
    onClick?: (e: any) => void
    Icon?: JSXElementConstructor<any>
    size?: 'sm' | 'md' | 'xl' | string
};

const sizeClasses: Record<string, { wrapper: string, item: string }> = {
    sm: {
        wrapper: 'w-12 h-12',
        item: 'w-8 h-8'
    },
    md: {
        wrapper: 'w-16 h-16',
        item: 'w-10 h-10'
    },
    xl: {
        wrapper: 'w-28 h-28',
        item: 'w-20 h-20'
    }
}

export function Avatars({ src = [], newMessage, children, className, size = 'md', onClick, Icon = UserGroupIcon }: PropsWithChildren<Avatars>) {
    const sizeClass = useMemo(() => (sizeClasses[size]),[size])
    if (!src?.length) {
        return (
            <div className={clsx('relative bg-gray-200 rounded-full flex justify-center items-center text-white', sizeClass?.wrapper, className, onClick && 'cursor-pointer')} onClick={onClick}>
                <Icon className={sizeClass?.item} />
                {newMessage && <Badge count={newMessage} className='bg-red-600 text-white left-0 bottom-0 absolute z-10' />}
                {children}
            </div>
        )
    }

    return (
        <div className={clsx('relative', className, sizeClass?.wrapper, onClick && 'cursor-pointer')} onClick={onClick}>
            <Avatar size="" src={src[0]} isRounded className={clsx('border border-white', sizeClass?.item)} />
            <div className='absolute bottom-0 right-0'><Avatar size="" src={src[1]} isRounded className={clsx('border border-white', sizeClass?.item)} /></div>
            {newMessage && <Badge count={newMessage} className='bg-red-600 text-white left-0 bottom-0 absolute z-10' />}
            {children}
        </div>
    )
}
