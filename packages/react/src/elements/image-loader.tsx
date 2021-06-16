import React, { JSXElementConstructor, PropsWithChildren, useMemo, useState } from 'react'
import clsx from 'clsx'
import { PhotographIcon } from '@heroicons/react/outline'

type ImageLoader = {
    src: string
    LoadIcon?: JSXElementConstructor<any>
    LoadIconClassName?: string
    className?: string
    imageStyle?: 'cover' | 'contain' | string
    onClick?: (e: any) => void
}
const IconClassName = 'w-8 h-8'
export const ImageLoader = ({
    src,
    LoadIcon = PhotographIcon,
    LoadIconClassName = IconClassName,
    className,
    imageStyle = 'contain',
    children,
    onClick,
}: PropsWithChildren<ImageLoader>) => {
    const [loading, setLoading] = useState(true)
    const image = useMemo(() => {
        if (src) {
            return (
                <img
                    ref={(ref) => {
                        if (ref && ref.complete) setLoading(false)
                    }}
                    className="invisible"
                    src={src}
                    onError={() => setLoading(true)}
                    onLoad={() => setLoading(false)}
                />
            )
        }
        return null
    }, [src])
    const placeholder = useMemo(() => {
        if (LoadIcon && loading) return <LoadIcon className={LoadIconClassName} />
        return null
    }, [loading, LoadIcon, LoadIconClassName])
    return (
        <div
            onClick={onClick}
            className={clsx(className, 'flex justify-center items-center bg-center', imageStyle == 'contain' ? 'bg-contain' : 'bg-cover', onClick && 'cursor-pointer')}
            style={{ backgroundImage: `url('${src}')` }}
        >
            {image}
            {placeholder}
            {children}
        </div>
    )
}
