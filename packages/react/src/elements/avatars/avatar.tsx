import React, { JSXElementConstructor, useMemo } from 'react'
import clsx from 'clsx'
import { PlusIcon, UserCircleIcon } from '@heroicons/react/outline'
import { AvatarWrapper } from './avatar-wrapper'
import { ImageLoader } from '..//image-loader'

type avatarSizeData = Record<string, { image: string, text: string, icon: string }>
export type Avatar = {
    className?: string
    src?: string
    size?: 'xs' | 'sm' | 'md' | 'lg' | string
    sizeData?: avatarSizeData
    isRounded?: boolean
    name?: string
    type?: 'src' | 'add-avatar'
    hasBorder?: boolean
    IconLoader?: JSXElementConstructor<any>
    wrapperClassName?: string
    onClick?: (e: any) => void
};

const SIZE: avatarSizeData = {
    xs: {
        image: 'w-8 h-8',
        icon: 'w-6 h-6',
        text: 'text-sm'
    },
    sm: {
        image: 'w-12 h-12',
        icon: 'w-10 h-10',
        text: 'text-lg'
    },
    md: {
        image: 'w-16 h-16',
        icon: 'w-12 h-12',
        text: 'text-2xl'
    },
    lg: {
        image: 'w-20 h-20',
        icon: 'w-16 h-16',
        text: 'text-3xl'
    },
    xl: {
        image: 'w-28 h-28',
        icon: 'w-20 h-20',
        text: 'text-4xl'
    },
}

const renderPlaceholder = (Icon: JSXElementConstructor<any>, type: string, size: string, sizeData: avatarSizeData, name?: string) => {
    if (type == 'add-avatar') return <PlusIcon className={sizeData[size]?.icon} />
    if (name) {
        return (
            <div className={clsx(sizeData[size]?.text)}>
                {name}
            </div>
        )
    }
    return <Icon className={clsx(sizeData[size]?.text)} />
}

export function Avatar({
    className,
    size = 'md',
    src = '',
    isRounded,
    children,
    name,
    hasBorder,
    type = 'src',
    wrapperClassName,
    onClick,
    sizeData = SIZE,
    IconLoader = UserCircleIcon,
}: React.PropsWithChildren<Avatar>) {
    const placeholder = useMemo(() => renderPlaceholder(IconLoader, type, size, sizeData, name), [sizeData, size, name, type])
    const rounded = useMemo(() => isRounded ? 'rounded-full' : 'rounded-lg', [isRounded])

    return (
        <AvatarWrapper
            hasBorder={hasBorder}
            className={clsx(rounded, wrapperClassName)}
        >
            <ImageLoader
                imageStyle="cover"
                className={clsx(
                    'relative flex items-center justify-center bg-cover bg-no-repeat bg-center',
                    sizeData[size]?.image,
                    type === 'add-avatar' && 'bg-white border border-dashed',
                    className,
                    rounded
                )}
                onClick={onClick}
                src={src}
                LoadIcon={() => placeholder}
            >
                {children}
            </ImageLoader>
        </AvatarWrapper>
    )
}
