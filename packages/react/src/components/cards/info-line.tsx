import React, { JSXElementConstructor } from 'react'
import clsx from 'clsx'
export type InfoLine = {
    label: string,
    labelClassName?: string
    Icon?: JSXElementConstructor<any>,
    iconOnClick?: (e: any) => void,
    iconClassName?: string,
    info?: string,
    infoClassName?: string,
    className?: string,
    onClick?: (e: any) => any
};

export const InfoLine = ({
    labelClassName,
    label,
    Icon,
    iconOnClick,
    iconClassName,
    infoClassName,
    info,
    className,
    onClick,
}: InfoLine) => {
    return (
        <div onClick={onClick} className={clsx('flex justify-between space-x-4', className, onClick && 'cursor-pointer')}>
            <div className={clsx('capital font-semibold truncate flex-shrink-0', labelClassName)}>{label}</div>
            {info && <div className={clsx(infoClassName, 'truncate')}>{info}</div>}
            {Icon && <Icon onClick={iconOnClick} className={clsx('w-5 h-5', iconClassName, iconOnClick && 'cursor-pointer')} />}
        </div>
    )
}
