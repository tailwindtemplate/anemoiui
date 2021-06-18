import React, { ReactNode, useMemo } from 'react'
import clsx from 'clsx'
import { AvatarLoader, Badge } from '../../elements'
// Default Props
type CartGround = {
  className?: string,
  count?: number,
  name?: string,
  nameClassName?: string,
  avatar?: string | string[],
  avatarClassName?: string,
  email?: string,
  emailClassName?: string,
  avatarChildren?: ReactNode,
};
export const CardGround = ({
    className,
    count,
    name,
    nameClassName,
    avatar,
    avatarClassName,
    email,
    emailClassName,
    avatarChildren,
}: CartGround) => {
    const badge = useMemo(() => count ? <Badge count={count} position="bottom-left" className="bg-yellow-400 text-sm px-6 py-3" /> : null, [count])
    return (
        <div className={clsx('bg-gray-50 rounded-3xl p-5 flex justify-center items-center flex-col text-center', className)}>
            <AvatarLoader avatar={avatar} size="xl" className={avatarClassName}>
                {badge}
                {avatarChildren}
            </AvatarLoader>
            <h3 className={clsx('font-medium text-lg mt-5 truncate w-full', nameClassName)}>{name}</h3>
            <div className={clsx('font-normal text-lg text-gray-400 mt-2 truncate w-full', emailClassName)}>{email}</div>
        </div>
    )
}