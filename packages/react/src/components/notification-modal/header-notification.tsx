import React, { PropsWithChildren } from 'react'
type HeaderNotification = {
    title?: string;
    titleClassName?: string;
    childrenClassName?: string;
};
const TitleClassName = 'text-lg font-semibold'
export const HeaderNotification = ({
    title,
    titleClassName = TitleClassName,
    children,
    childrenClassName,
}: PropsWithChildren<HeaderNotification>) => {
    return (
        <div className="flex py-3 px-2 bg-white border-t border-r border-l rounded-t-lg justify-between	items-center">
            <h3 className={titleClassName}>{title}</h3>
            <div className={childrenClassName}>
                <div className="flex"> {children}</div>
            </div>
        </div>
    )
}
