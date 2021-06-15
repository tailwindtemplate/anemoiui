import React from 'react'
import { ChatIcon } from '@heroicons/react/outline'

export const MessageInput = () => {
    return (
        <div className="flex items-center bg-white rounded-full p-4 flex-shrink-0">
            <textarea placeholder="Message input" className="focus:outline-none border-none flex-1 resize-none p-2 h-10" />
            <ChatIcon className="w-8 h-8 flex-shrink-0 cursor-pointer" />
        </div>
    )
}
