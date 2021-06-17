import React, { InputHTMLAttributes, JSXElementConstructor } from 'react'
import clsx from 'clsx'
import { Avatar } from '../avatars'

type TextInput = {
    LeftIcon?: JSXElementConstructor<any>
    leftIconClassName?: string
    RightIcon?: JSXElementConstructor<any>
    rightIconClassName?: string
    className?: string
    inputClassName?: string
    borderType?: 'error' | string
    avatar?: string
    avatarSize?: string
    avatarClassName?: string
};

const border: Record<string, string> = {
    error: 'border-red-500'
}

export const TextInput = ({
    LeftIcon,
    leftIconClassName = 'w-5 h-5',
    RightIcon,
    rightIconClassName = 'w-5 h-5',
    className,
    inputClassName,
    borderType,
    avatar,
    avatarSize = 'xs',
    avatarClassName,
    disabled,
    ...rest
}: TextInput & InputHTMLAttributes<unknown>) => {
    return (
        <div
            className={clsx(
                'text-gray-600 p-2 focus-within:text-gray-400 border rounded-xl flex items-center',
                borderType && border[borderType],
                disabled && 'bg-gray-100 pointer-events-none',
                className
            )}
        >
            {avatar && <Avatar wrapperClassName='flex-shrink-0 mr-2' className={clsx(avatarClassName)} size={avatarSize} src={avatar} isRounded />}
            {LeftIcon && (
                <span className="flex items-center flex-shrink-0 mr-2">
                    <LeftIcon className={leftIconClassName} />
                </span>
            )}
            <input
                type="text"
                className={clsx(
                    'text-sm focus:outline-none w-full placeholder-neutral-300 rounded-xl p-1',
                    inputClassName,
                )}
                disabled={disabled}
                {...rest}
            />
            {RightIcon && (
                <span className="flex items-center flex-shrink-0 ml-2">
                    <RightIcon className={rightIconClassName} />
                </span>
            )}
        </div>
    )
}
