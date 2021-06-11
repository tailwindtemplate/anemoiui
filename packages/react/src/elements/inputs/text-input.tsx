import React, { InputHTMLAttributes } from 'react';
import clsx from 'clsx';
import { Avatar } from 'elements';

type TextInput = {
    LeftIcon?: any;
    RightIcon?: any;
    className?: string;
    inputClassName?: string;
    type?: 'error' | string;
    cancelOnclick?: () => void;
    src?: string;
};

const TYPE_MAPS: any = {
    error: 'border-red-500',
};

export default function TextInput({
    LeftIcon,
    RightIcon,
    className,
    inputClassName,
    type,
    cancelOnclick,
    src,
    ...rest
}: TextInput & InputHTMLAttributes<{}>) {
    return (
        <div className={clsx('relative w-full text-gray-600 focus-within:text-gray-400', className)}>
            <div className="flex items-center">
                {src && <Avatar size="xs" src={src} isRounded className="absolute left-0 ml-2" isAbsolute />}
                {LeftIcon && (
                    <span className="absolute left-0 flex items-center px-2 h-full">
                        <LeftIcon className="w-5 h-5" />
                    </span>
                )}
                <input
                    type="text"
                    className={clsx(
                        'py-3 text-sm rounded-xl focus:border-primary-400 focus:outline-none border w-full placeholder-neutral-300',
                        LeftIcon ? 'px-10' : 'px-4',
                        src ? 'px-12' : 'px-4',
                        type && TYPE_MAPS[type],
                        inputClassName,
                    )}
                    placeholder="Search member..."
                    {...rest}
                />
                {RightIcon && (
                    <span className="absolute right-0 flex items-center pr-2" onClick={cancelOnclick}>
                        <RightIcon className="w-5 h-5" />
                    </span>
                )}
            </div>
        </div>
    );
}
