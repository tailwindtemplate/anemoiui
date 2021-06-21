import React, { JSXElementConstructor, PropsWithChildren, useMemo, useState } from 'react'
import clsx from 'clsx'
import { PhotographIcon } from '@heroicons/react/outline'

type ImageLoader = {
    src: string
    LoadIcon?: JSXElementConstructor<any>
    loadIconClassName?: string
    className?: string
    imageStyle?: 'cover' | 'contain' | string
    onClick?: (e: any) => void
}
export const ImageLoader = ({
    src,
    LoadIcon = PhotographIcon,
    loadIconClassName = 'w-8 h-8',
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
        if (LoadIcon && loading) return <LoadIcon className={clsx(loadIconClassName, 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2')} />
        return null
    }, [loading, LoadIcon, loadIconClassName])
    return (
        <div
            onClick={onClick}
            className={clsx(className, 'relative flex justify-center items-center bg-center', imageStyle == 'contain' ? 'bg-contain' : 'bg-cover', onClick && 'cursor-pointer')}
            style={{ backgroundImage: `url('${src}')` }}
        >
            {image}
            {placeholder}
            {children}
        </div>
    )
}
