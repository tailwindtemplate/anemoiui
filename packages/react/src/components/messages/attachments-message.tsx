import React from 'react';
import clsx from 'clsx';
import { AttachmentCard } from '../cards';

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
