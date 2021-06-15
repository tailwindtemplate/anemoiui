import React, { JSXElementConstructor, PropsWithChildren, useMemo, useState } from 'react';
import clsx from "clsx";
import { PlusIcon, UserCircleIcon } from '@heroicons/react/outline'
import { ImageLoader } from 'elements/image-loader';

type Textarea = {
  className?: string;
  src?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | string;
  isRounded?: boolean;
  newMessage?: number;
  status?: string;
  hasExtension?: boolean;
  name?: string;
  type?: "src" | "add-avatar";
  hasBorder?: boolean;
};

const SIZE: any = {
  xs: "w-8 h-8",
  sm: "w-12 h-12",
  md: "w-16 h-16",
  lg: 'w-28 h-28',
};

const SHORT_NAME: any = {
  xs: "text-sm",
  sm: "text-lg",
  md: "text-2xl"
};

const SIZE_DEFAULT: any = {
  xs: "w-4 h-4",
  sm: "w-6 h-6",
  md: "w-8 h-8",
  lg: 'w-28 h-28',
};

const renderAvatar = (type: string, size: string, name?: string) => {
  if (type == 'add-avatar') return <PlusIcon width={13} height={13} />
  if (name) {
    return (
        <div className={clsx("text-white", SHORT_NAME[size])}>
          {name}
        </div>
    );
  }
  return <UserCircleIcon className={clsx(SIZE_DEFAULT[size], 'text-white')} />;
};

type AvatarWrapper = {
  src?: string
  hasBorder?: boolean
  isRounded?: boolean
  className: string
  placeholder?: JSXElementConstructor<any>
}
const AvatarWrapper = ({ src = '', hasBorder, isRounded, className, children, placeholder }: PropsWithChildren<AvatarWrapper>) => {
  const rounded = isRounded ? "rounded-full" : 'rounded-xl'
  if (hasBorder) {
    return (
        <div className={clsx('border-2 border-secondary-600 w-min', rounded)}>
          <ImageLoader imageStyle="cover" className={clsx(className, 'border-2 border-white', rounded)} src={src} LoadIcon={placeholder}>
            {children}
          </ImageLoader>
        </div>
    )
  }
  return <ImageLoader imageStyle="cover" className={clsx(className, rounded)} src={src} LoadIcon={placeholder}>{children}</ImageLoader>
}

export function Avatar({
  className,
  size = 'md',
  src,
  isRounded = false,
  children,
  hasExtension,
  name,
  hasBorder,
  type = "src",
}: React.PropsWithChildren<Textarea>) {
  const placeholder = useMemo(() => renderAvatar(type, size, name), [size, name, type])

  return (
        <AvatarWrapper
            hasBorder={hasBorder}
            isRounded={isRounded}
            className={clsx(
                "relative flex items-center justify-center bg-cover bg-no-repeat bg-center",
                SIZE[size],
                type === "add-avatar" ? "bg-white border border-dashed" : 'bg-primary-600',
                className,
            )}
            src={src}
            placeholder={() => placeholder}
        >
            {children}
            {hasExtension && (
                <div className="absolute -bottom-1 -right-0.5 bg-primary-900 rounded-full border-2 border-white w-4 h-4 flex justify-center items-center">
                  <PlusIcon fill="#FFF" width={8} height={8} className='text-white' />
                </div>
            )}
        </AvatarWrapper>
    )
}

export const Status = ({ className }: any) => {
  return (
    <div
      className={clsx(
        "absolute w-3 h-3 bg-green-500 rounded-full border-2 border-white",
        className
      )}
    />
  );
};
