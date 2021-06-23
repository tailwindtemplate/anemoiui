import React, { PropsWithChildren } from 'react'
import clsx from 'clsx'

type NotificationModal = {
    className?: string;
};
const ClassName = 'bg-white overflow-y-auto border relative py-2'
export const NotificationModal = ({
    className = ClassName,
    children,
}: PropsWithChildren<NotificationModal>) => (<div className={clsx('bg-white overflow-y-auto border relative py-2',className)}> {children}</div>)