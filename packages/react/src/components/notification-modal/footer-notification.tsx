import React, { PropsWithChildren } from 'react'

type FooterNotification = {
    className?: string
};
const ClassName = 'bg-white rounded-bl-lg rounded-br-lg border-l border-b border-r flex justify-between	items-center py-1'
export const FooterNotification = ({ className = ClassName, children }: PropsWithChildren<FooterNotification>) => (<div className={className}>{children}</div>)