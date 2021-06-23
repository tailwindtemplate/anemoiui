import React, { PropsWithChildren } from 'react'
import clsx from 'clsx'

type HeaderNotification = {
    title?: string;
    titleClassName?: string;
    className?: string;
};
export const HeaderNotification = ({
    title,
    titleClassName,
    children,
    className,
}: PropsWithChildren<HeaderNotification>) => {
    return (
        <div className={clsx('flex justify-between items-center',className)}>
            <h3 className={titleClassName}>{title}</h3>
            <div className="flex"> {children}</div>
        </div>
    )
}
