import React from 'react'
import {ChannelMessages} from '../channel-messages'
import {attachmentMessageItem, textMessageItem, user} from '../../../const'

export const ChannelTabBody = () => {
    const messages = [
        {
            messageItem: textMessageItem,
            user,
            position: 'start'
        },
        {
            messageItem: attachmentMessageItem,
            user,
            position: 'start'
        },
        {
            messageItem: textMessageItem,
            user,
            position: 'start'
        }
    ]

    return (
        <div className='h-chat-box overflow-auto bg-primary-50'>
            <ChannelMessages messages={messages} />
        </div>
    )
}
