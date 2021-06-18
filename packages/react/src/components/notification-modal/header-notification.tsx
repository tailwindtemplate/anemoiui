import React, { PropsWithChildren } from 'react'
type HeaderNotification = {
    title?: string,
    titleClassName?: string,
    childrenClassName?: string
}
const TitleClassName = 'py-3 px-2 bg-white text-lg	font-semibold border-t border-r	border-l rounded-t-lg'
const ChildrenClassName = 'absolute right-4 top-1/3 flex'
export const HeaderNotification = ({ title, titleClassName = TitleClassName, children, childrenClassName = ChildrenClassName }: PropsWithChildren<HeaderNotification>) => {
    return (
        <div className="relative">
            <h3 className={titleClassName}>{title}</h3>
            <div className={childrenClassName}>
                {children}
            </div>
        </div>
    )
}