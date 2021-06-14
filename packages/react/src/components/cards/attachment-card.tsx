import React, { JSXElementConstructor } from 'react'
import { DocumentIcon, DownloadIcon, ShareIcon } from '@heroicons/react/outline'
import clsx from 'clsx'
import { ImageLoader } from 'elements'

export type AttachmentCard = {
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
    beforeHeader?: string
}
export const AttachmentCard = ({ hasDownload = true, fileName, content, size, url, Icon = DocumentIcon, image = '', forwardClick, onClick, beforeHeader }: AttachmentCard) => {
    return (
        <div className={clsx('rounded-3xl border border-gray-200 hover:border-primary-400 px-5 py-3 flex flex-col md:flex-row md:justify-between items-center bg-white', onClick && 'cursor-pointer')} onClick={onClick}>
            <ImageLoader src={image} imageStyle="cover" LoadIcon={Icon} LoadIconClassName="w-10 h-10 flex-shrink-0" className="w-auto max-h-40 md:w-10 md:h-10 rounded-md flex-shrink-0 bg-no-repeat"/>
            <div className="md:mr-auto md:ml-3 w-full overflow-hidden">
                {beforeHeader && <div className="text-xs text-gray-400 truncate">{beforeHeader}</div>}
                <h3 className={clsx('truncate', beforeHeader ? 'text-primary-300 text-xs' : 'text-gray-600 text-lg')}>{fileName}</h3>
                <div className={clsx('flex flex-wrap md:flex-nowrap truncate', beforeHeader ? 'text-xs' : 'text-sm')}>
                    <div className="text-gray-600 truncate">{content}</div>
                    {size && <div className="flex-1 text-gray-400 md:ml-2 whitespace-nowrap">{size}</div>}
                </div>
            </div>
            {hasDownload && (
                <div className="text-gray-400 mt-auto flex space-x-2 ml-2">
                    <DownloadIcon className="hover:text-primary-400 w-4 h-4 cursor-pointer" onClick={() => window.open(url, '_blank')} />
                    <ShareIcon className="hover:text-primary-400 w-4 h-4 cursor-pointer" onClick={forwardClick} />
                </div>
            )}
        </div>
    )
}
