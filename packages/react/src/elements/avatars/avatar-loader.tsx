import React, { PropsWithChildren, useMemo } from 'react'
import { Avatars } from './avatars'
import { Avatar } from './avatar'

export type AvatarLoader = {
    avatar?: string | string[] | any
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | string
    className?: string
    isRounded?: boolean
}
export const AvatarLoader = ({ avatar, size = 'md', className, children, isRounded }: PropsWithChildren<AvatarLoader>) => {
    const Component = useMemo(() => Array.isArray(avatar) ? Avatars : Avatar, [avatar])
    return (
        <Component src={avatar} className={className} size={size} isRounded={isRounded}>
            {children}
        </Component>
    )
}
