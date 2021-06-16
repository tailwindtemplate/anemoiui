import React from 'react'
import { BellIcon, BookOpenIcon, ChatIcon, PlusIcon, UserGroupIcon, UserIcon } from '@heroicons/react/outline'

export const AppSidebar = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-primary-400 w-full text-white h-full space-y-12">
            <div className="relative cursor-pointer">
                <ChatIcon className="w-6 h-6" />
            </div>
            <div className="relative cursor-pointer">
                <UserGroupIcon className="w-6 h-6" />
            </div>
            <div className="relative cursor-pointer">
                <BookOpenIcon className="w-6 h-6" />
            </div>
            <div className="relative cursor-pointer">
                <UserIcon className="w-6 h-6" />
            </div>
            <div className="relative cursor-pointer">
                <PlusIcon className="w-6 h-6" />
            </div>
            <div className="relative cursor-pointer">
                <BellIcon className="w-6 h-6" />
            </div>
        </div>
    )
}
