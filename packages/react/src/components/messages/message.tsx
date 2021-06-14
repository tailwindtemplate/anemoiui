import React, { JSXElementConstructor, useMemo } from 'react'
import clsx from 'clsx'
import { AttachmentsMessage, TextMessage, MessageStatus, MessageHeader } from './'

type Message = {
    isOwner?: boolean
    user?: { name: string, avatar: string }
    isBubble?: boolean
    messageItem: any
    messageClassname?: string
    position?: 'start' | 'end' | string
    status?: string
    className?: string
    statusItems?: Record<string, JSXElementConstructor<any>>
}

const checkType = (type: string) => {
    switch (type) {
    case 'text':
        return TextMessage
    case 'attachment':
        return AttachmentsMessage
    default:
        return null
    }
}

export const Message = ({ isOwner = false, messageItem, user, position, status, className, statusItems, isBubble, messageClassname }: Message) => {
    const Message = useMemo(() => checkType(messageItem.type), [messageItem.type])
    if (!Message) return <div>Wrong message type</div>
    return (
        <div className={clsx(className, 'w-full')}>
            {position == 'start' && user && <MessageHeader {...user} isOwner={isOwner} />}
            <div className={clsx('w-3/4', isOwner ? 'md:mr-16 ml-auto' : 'md:ml-16')}>
                <Message className={clsx(messageItem.type === 'attachment' && 'max-w-17rem md:max-w-lg', isOwner && 'ml-auto', messageClassname)} position={position} isOwner={isOwner} {...messageItem} isBubble={isBubble} />
                {status && <MessageStatus className={isOwner ? 'ml-auto w-max' : ''} status={status} items={statusItems} time={messageItem.time} />}
            </div>
        </div>
    )
}
