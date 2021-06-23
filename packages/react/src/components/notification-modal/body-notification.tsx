import React, { PropsWithChildren } from 'react'
import clsx from 'clsx'

type NotificationModal = {
    className?: string;
};
export const NotificationModal = ({
    className,
    children,
}: PropsWithChildren<NotificationModal>) => (
    <div className={clsx('bg-white overflow-y-auto', className)}>
        {children}
    </div>
)
