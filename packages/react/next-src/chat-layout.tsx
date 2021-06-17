import { PropsWithChildren } from 'react';
import { AppSidebar, UserProfile, ChatSidebar } from '../src'

export const ChatLayout = ({ children }: PropsWithChildren<{}>) => {
    return (
        <div className="w-full h-full overflow-hidden flex rounded-lg" style={{ maxHeight: 'calc(100vh - 8rem)'}}>
            <div className="bg-primary-400 w-16 flex-shrink-0"><AppSidebar /></div>
            <div style={{ width: '336px' }} className="p-4 bg-gray-100 flex-shrink-0"><ChatSidebar /></div>
            <div className="flex-1 bg-gray-100 flex flex-col">{children}</div>
            <div style={{ width: '336px' }} className="p-4 bg-gray-100 flex-shrink-0 overflow-y-scroll"><UserProfile /></div>
        </div>
    )
}
