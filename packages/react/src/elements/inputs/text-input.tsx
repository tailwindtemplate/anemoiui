import React, { InputHTMLAttributes } from 'react'
import clsx from 'clsx'
import { Avatar } from '../avatar'

type TextInput = {
  LeftIcon?: any;
  RightIcon?: any;
  className?: string;
  inputClassName?: string;
  borderType?: 'error' | string;
  wrapperClassName?: string;
  inputRef?: React.Ref<HTMLInputElement>;
};

const border: Record<string, string> = {
    error: 'border-red-500'
}

export const TextInput = ({
    LeftIcon,
    RightIcon,
    className,
    inputClassName,
    borderType,
    src,
    wrapperClassName,
    inputRef,
    ...rest
}: TextInput & InputHTMLAttributes<unknown>) => {
    return (
        <div className={clsx('w-full', wrapperClassName)}>
            <div
                className={clsx(
                    'text-gray-600 focus-within:text-gray-400 border rounded-xl w-full flex items-center',
                    className
                )}
            >
                {src && <Avatar className="flex-shrink-0 ml-2" size="xs" src={src} isRounded />}
                {LeftIcon && (
                    <span className="flex items-center flex-shrink-0 pl-2">
                        <LeftIcon className='w-5 h-5' />
                    </span>
                )}
                <input
                    type="text"
                    className={clsx(
                        'py-2 md:py-3 text-sm focus:border-primary-400 focus:outline-none w-full placeholder-neutral-300 rounded-xl',
                        LeftIcon ? 'px-2' : 'px-4',
                        borderType && border[borderType],
                        inputClassName,
                    )}
                    ref={inputRef}
                    {...rest}
                />
                {RightIcon && (
                    <span className="flex items-center flex-shrink-0 pr-2">
                        <RightIcon className='w-5 h-5 cursor-pointer' />
                    </span>
                )}
            </div>
        </div>
    )
}
