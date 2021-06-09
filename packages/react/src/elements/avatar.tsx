import React, { PropsWithChildren, useMemo, useState } from 'react';
import clsx from "clsx";
import { PlusIcon, UserCircleIcon } from '@heroicons/react/outline'

type Textarea = {
  className?: string;
  src?: string;
  size?: 'xs' | 'sm' | 'md' | string;
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
  md: "w-16 h-16"
};

const SHORT_NAME: any = {
  xs: "text-sm",
  sm: "text-lg",
  md: "text-2xl"
};

const SIZE_DEFAULT: any = {
  xs: "w-4 h-4",
  sm: "w-6 h-6",
  md: "w-8 h-8"
};

const renderAvatar = (type: string, load: boolean, size: string, name?: string) => {
  if (type == 'add-avatar') return null
  if (load) {
    if (name) {
      return (
          <div className={clsx("text-white", SHORT_NAME[size])}>
            {name}
          </div>
      );
    }

    return <UserCircleIcon className={clsx(SIZE_DEFAULT[size], 'text-white')} />;
  }
  return null
};

type AvatarWrapper = {
  hasBorder?: boolean
  isRounded?: boolean
  className: string
  style: {}
}
const AvatarWrapper = ({ hasBorder, isRounded, className, style, children }: PropsWithChildren<AvatarWrapper>) => {
  const rounded = isRounded ? "rounded-full" : 'rounded-xl'
  if (hasBorder) {
    return (
        <div className={clsx('border-2 border-secondary-600 w-min', rounded)}>
          <div className={clsx(className, 'border-2 border-white', rounded)} style={style}>
            {children}
          </div>
        </div>
    )
  }
  return <div className={clsx(className, rounded)} style={style}>{children}</div>
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
  type = "src"
}: React.PropsWithChildren<Textarea>) {
  const [loading, setLoading] = useState(true)
  const placeholder = useMemo(() => renderAvatar(type, loading, size, name), [loading, size, name, type])
  const avatar = useMemo(() => {
    if (type == 'add-avatar') return <PlusIcon width={13} height={13} />
    if (src) return (
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
    return null
  }, [src, type])

  return (
        <AvatarWrapper
            hasBorder={hasBorder}
            isRounded={isRounded}
            className={clsx(
                "relative flex items-center justify-center bg-cover bg-no-repeat bg-center",
                SIZE[size],
                type === "add-avatar" ? "bg-white border border-dashed" : 'bg-primary-600',
                className
            )}
            style={{ backgroundImage: `url('${src}')` }}
        >
            {avatar}
            {placeholder}
            {children}
            {hasExtension && (
                <div className="absolute -bottom-1 -right-0.5 bg-primary-900 rounded-full border-2 border-white w-4 h-4 flex justify-center items-center">
                  <PlusIcon fill="#FFF" width={8} height={8} className='text-white' />
                </div>
            )}
        </AvatarWrapper>
    )
}

type NewMessage = {
  newMessage: number;
  className?: string;
};

export const NewMessage = ({ newMessage, className }: NewMessage) => {
  return (
    <div
      className={clsx(
        "absolute text-tiny bg-red-600 text-white rounded-full w-4 h-4 flex justify-center items-center",
        className
      )}
    >
      {newMessage}
    </div>
  );
};

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
