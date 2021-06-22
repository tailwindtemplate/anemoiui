import React from 'react'
import { CameraIcon } from '@heroicons/react/outline'

type FileUploader = {
    id?: string;
    className?: string;
}

export function FileUploader({id, className}: FileUploader) {

    return (
        <label htmlFor={id} className={className}>
            <input type="file" name="file" hidden id={id} />
            <CameraIcon className='w-8 h-8 cursor-pointer' />
        </label>
    )
}
