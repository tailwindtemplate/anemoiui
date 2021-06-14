import { PropsWithChildren } from 'react';

export const ChatLayout = ({ children }: PropsWithChildren<{}>) => {
    return (
        <div className="w-full h-full overflow-hidden flex rounded-lg" style={{ maxHeight: 'calc(100vh - 8rem)'}}>
            <div className="bg-primary-400 w-16 flex-shrink-0">app sidebar</div>
            <div className="w-56 p-4 bg-gray-100 flex-shrink-0">left sidebar</div>
            <div className="flex-1 bg-gray-100 flex flex-col">{children}</div>
            <div className="w-56 p-4 bg-gray-100 flex-shrink-0">right sidebar</div>
        </div>
    )
}
