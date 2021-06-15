import React, { useMemo } from 'react';
import clsx from 'clsx';

type TextMessage = {
    message: string;
    isBubble?: boolean;
    position?: 'start' | 'end' | string;
    isOwner?: boolean;
    className?: string;
}
const positionBorder = (isOwner: boolean, position?: string) => {
    switch (position) {
        case 'start':
            return isOwner ? 'rounded-md rounded-br-none' : 'rounded-md rounded-bl-none'
        case 'end':
            return isOwner ? 'rounded-md rounded-tr-none' : 'rounded-md rounded-tl-none'
        default:
            return isOwner ? 'rounded-l-md' : 'rounded-r-md'
    }
}
export const TextMessage = ({ message, isBubble = true, isOwner = false, position, className }: TextMessage) => {
    const borderClass = useMemo(() => positionBorder(isOwner, position), [isOwner, position])
    return (
        <div className={clsx(isBubble && 'bg-primary-100 p-4', borderClass, className)}>
            <div className="break-all break-words">
                {message}
            </div>
        </div>
    )
}
