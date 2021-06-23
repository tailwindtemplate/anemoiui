import React, { PropsWithChildren } from 'react'
import clsx from 'clsx'

type FooterNotification = {
    className?: string;
};
export const FooterNotification = ({
    className,
    children,
}: PropsWithChildren<FooterNotification>) => (
    <div className={clsx('flex justify-between items-center', className)}>
        {children}
    </div>
)
