import React, { InputHTMLAttributes } from 'react';
import { UserIcon } from '@heroicons/react/outline'
import clsx from "clsx";

type TextInput = {
  LeftIcon?: any;
  RightIcon?: any;
  className?: string;
  inputClassName?: string;
  type?: 'error' | string;
};

const TYPE_MAPS: any = {
  error: "border-red-500"
};

export const TextInput = ({
  LeftIcon,
  RightIcon,
  className,
  inputClassName,
  type,
  ...rest
}: TextInput & InputHTMLAttributes<{}>) => {
  return (
    <div
      className={clsx(
        "relative text-gray-600 focus-within:text-gray-400 m-2",
        className
      )}
    >
      <div>
        {LeftIcon && (
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <LeftIcon className='w-5 h-5' />
          </span>
        )}
        <input
          type="text"
          className={clsx(
            "text-sm focus:border-primary-400 focus:outline-none border w-full placeholder-neutral-300 p-3 rounded-md",
            LeftIcon ? "px-8" : "px-4",
            type && TYPE_MAPS[type],
            inputClassName,
          )}
          placeholder="Search member..."
          {...rest}
        />
        {RightIcon && (
          <span className="absolute inset-y-0 right-0 flex items-center pr-2">
            <RightIcon className='w-5 h-5' />
          </span>
        )}
      </div>
    </div>
  );
}
