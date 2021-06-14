import React from 'react';
import { Message } from 'components';
import { attachmentMessageItem, textMessageItem, user } from '../../const';

type ChannelMessages = {
    messages: any[]
}
export const ChannelMessages = ({ messages }: ChannelMessages) => {
    return (
        <div className="mt-4 overflow-y-auto overflow-x-hidden flex-1 pl-4">
            {messages.map((item, index) => <Message key={index} {...item} isBubble={false} messageClassname={item.messageItem.type == 'attachment' ? 'space-y-2' : ''} />)}
        </div>
    )
}
