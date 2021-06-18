import React, { useMemo } from 'react'
import clsx from 'clsx'
import { PlusIcon, UserCircleIcon } from '@heroicons/react/outline'
import { AvatarWrapper } from './avatar-wrapper'
import { ImageLoader } from '..//image-loader'

type Textarea = {
    className?: string;
    src?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg' | string;
    isRounded?: boolean;
    newMessage?: number;
    status?: string;
    hasExtension?: boolean;
    name?: string;
    type?: 'src' | 'add-avatar';
    hasBorder?: boolean;
    wrapperClassName?: string
    onClick?: (e: any) => void
};

const SIZE: Record<string, { image: string, text: string }> = {
    xs: {
        image: 'w-8 h-8',
        text: 'text-sm'
    },
    sm: {
        image: 'w-12 h-12',
        text: 'text-lg'
    },
    md: {
        image: 'w-16 h-16',
        text: 'text-2xl'
    },
    lg: {
        image: 'w-20 h-20',
        text: 'text-3xl'
    },
    xl: {
        image: 'w-28 h-28',
        text: 'text-4xl'
    },
}

const renderPlaceholder = (type: string, size: string, name?: string) => {
    if (type == 'add-avatar') return <PlusIcon width={13} height={13} />
    if (name) {
        return (
            <div className={clsx('text-white', SIZE[size]?.text)}>
                {name}
            </div>
        )
    }
    return <UserCircleIcon className={clsx(SIZE[size]?.text, 'text-white')} />
}

export function Avatar({
    className,
    size = 'md',
    src = '',
    isRounded,
    children,
    hasExtension,
    name,
    hasBorder,
    type = 'src',
    wrapperClassName,
    onClick,
}: React.PropsWithChildren<Textarea>) {
    const placeholder = useMemo(() => renderPlaceholder(type, size, name), [size, name, type])
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
                    SIZE[size]?.image,
                    type === 'add-avatar' ? 'bg-white border border-dashed' : 'bg-primary-600',
                    className,
                    rounded
                )}
                onClick={onClick}
                src={src}
                LoadIcon={() => placeholder}
            >
                {children}
                {hasExtension && (
                    <div className="absolute -bottom-1 -right-0.5 bg-primary-900 rounded-full border-2 border-white w-4 h-4 flex justify-center items-center">
                        <PlusIcon fill="#FFF" width={8} height={8} className='text-white' />
                    </div>
                )}
            </ImageLoader>
        </AvatarWrapper>
    )
}
