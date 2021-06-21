import React from 'react'
import clsx from 'clsx'
import { Avatar } from '../avatars'

export type SelectItem = {
    title: string
    onClick?: (e: any) => void
    className?: string
    Icon?: any
    iconClassName?: string
    avatar?: string
    avatarClassName?: string
    avatarSize?: string
}
export const SelectItem = ({
    title,
    className,
    onClick,
    avatar,
    avatarSize = 'xs',
    avatarClassName,
    iconClassName,
    Icon,
}: SelectItem) => {
    return (
        <div
            onClick={onClick}
            className={clsx('cursor-pointer flex items-center overflow-hidden', className)}
        >
            {Icon && <Icon className={clsx('mr-2 w-5 h-5 flex-shrink-0', iconClassName)} />}
            {avatar && <Avatar size={avatarSize} isRounded className={clsx('mr-2 flex-shrink-0', avatarClassName)} src={avatar} />}
            <div className={clsx('mr-2 truncate w-full', title ? 'text-neutral-800' : 'text-neutral-300')}>
                {title}
            </div>
        </div>
    )
}
