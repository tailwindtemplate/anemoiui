import React, { JSXElementConstructor, useMemo } from 'react';
import { DocumentIcon, DownloadIcon, FastForwardIcon } from '@heroicons/react/outline';
import clsx from 'clsx';

type AttachmentCard = {
    type: string
    fileName: string
    content: string
    size?: string
    url: string
    Icon?: JSXElementConstructor<any>
    image?: string
    hasDownload?: boolean
    forwardClick?: (e: any) => void
    onClick?: (e: any) => void
}
const AttachmentCard = ({ hasDownload = true, fileName, content, size, url, Icon, image, forwardClick, onClick }: AttachmentCard) => {
    const delegate = useMemo(() => {
        if (image) return <img src={image} className="w-auto max-h-40 md:w-10 md:h-10 rounded-md flex-shrink-0"/>
        if (Icon) return <Icon className="w-10 h-10 flex-shrink-0" />
        return <DocumentIcon className="w-10 h-10 flex-shrink-0" />
    }, [Icon, image])
    return (
        <div className={clsx('rounded-3xl border border-gray-100 hover:border-primary-400 px-5 py-3 flex flex-col md:flex-row md:justify-between items-center', onClick && 'cursor-pointer')} onClick={onClick}>
            {delegate}
            <div className="md:mr-auto md:ml-3 w-full overflow-hidden">
                <h3 className="text-gray-600 text-lg whitespace-nowrap overflow-ellipsis overflow-hidden">{fileName}</h3>
                <div className="text-sm flex flex-wrap md:flex-nowrap overflow-hidden overflow-ellipsis">
                    <div className="text-gray-600 whitespace-nowrap overflow-hidden overflow-ellipsis">{content}</div>
                    {size && <div className="flex-1 text-gray-400 md:ml-2 whitespace-nowrap">{size}</div>}
                </div>
            </div>
            {hasDownload && (
                <div className="text-gray-400 mt-auto flex space-x-2 ml-2">
                    <DownloadIcon className="hover:text-primary-400 w-4 h-4 cursor-pointer" onClick={() => window.open(url, '_blank')} />
                    <FastForwardIcon className="hover:text-primary-400 w-4 h-4 cursor-pointer" onClick={forwardClick} />
                </div>
            )}
        </div>
    )
}

type AttachmentsMessage = {
    attachments: AttachmentCard[]
    className?: string
}

export const AttachmentsMessage = ({ attachments, className }: AttachmentsMessage) => {
    return (
        <div className={clsx(className)}>
            {attachments.map((attachment) => <AttachmentCard key={attachment.url} {...attachment} />)}
        </div>
    )
}
