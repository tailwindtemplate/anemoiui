import React, { InputHTMLAttributes, JSXElementConstructor } from 'react'
import clsx from 'clsx'
import { Avatar } from '../avatars'

export type TextInput = {
    LeftIcon?: JSXElementConstructor<any>
    leftIconClassName?: string
    RightIcon?: JSXElementConstructor<any>
    rightIconClassName?: string
    className?: string
    inputClassName?: string
    borderType?: 'error' | string
    avatar?: Avatar
};

const border: Record<string, string> = {
    error: 'border-red-500'
}

export const TextInput = ({
    LeftIcon,
    leftIconClassName = 'w-5 h-5 mr-2',
    RightIcon,
    rightIconClassName = 'w-5 h-5 ml-2',
    className = 'p-2 border rounded-md',
    inputClassName,
    borderType,
    avatar,
    disabled,
    ...rest
}: TextInput & InputHTMLAttributes<unknown>) => {
    return (
        <div
            className={clsx(
                'flex items-center',
                borderType && border[borderType],
                disabled && 'disable',
                className
            )}
        >
            {avatar && <Avatar wrapperClassName='flex-shrink-0 mr-2' size="xs" {...avatar} />}
            {LeftIcon && (
                <LeftIcon className={clsx(leftIconClassName, 'flex-shrink-0')} />
            )}
            <input
                type="text"
                className={clsx(
                    'focus:outline-none w-full',
                    inputClassName,
                )}
                disabled={disabled}
                {...rest}
            />
            {RightIcon && (
                <RightIcon className={clsx(rightIconClassName, 'flex-shrink-0')} />
            )}
        </div>
    )
}
