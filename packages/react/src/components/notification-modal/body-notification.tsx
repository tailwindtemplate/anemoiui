import React, { PropsWithChildren } from 'react'
type NotificationModal = {
    className?: string
}
const ClassName = 'w-96 bg-white h-96 overflow-y-auto border relative py-2'
export const NotificationModal = ({ className = ClassName, children }: PropsWithChildren<NotificationModal>) => {
    return <div className={className}>{children}</div>
}