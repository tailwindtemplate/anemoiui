import React from 'react'
import clsx from 'clsx'

type Radio = {
  checked?: boolean;
  onClick?: () => void;
  label?: string;
  size?: string;
  id?: string;
  disabled?: boolean;
  caption?: string;
  className?: string;
};

const SIZE: any = {
    SM: 'w-6 h-6',
    BASE: 'w-8 h-8'
}

const BORDER: any = {
    SM: 'border-6',
    BASE: 'border-8'
}

export function Radio({
    checked = false,
    onClick,
    label,
    size = 'BASE',
    id,
    disabled,
    caption,
    className
}: Radio) {
    return (
        <div className={clsx('m-2 flex justify-center items-center', disabled && 'opacity-50 cursor-not-allowed select-none', className)} onClick={onClick}>
            <input
                type="radio"
                className="hidden"
                checked={checked}
                disabled={disabled}
            />
            <div className={clsx('rounded-full border-primary-700', checked ? BORDER[size] : 'border', SIZE[size])} />
            <div className="flex flex-col">
                {label && <span className="ml-2 text-gray-700 text-sm">{label}</span>}
                {caption && (
                    <span className="ml-2 text-gray-400 text-xs">{caption}</span>
                )}
            </div>
        </div>
    )
}
