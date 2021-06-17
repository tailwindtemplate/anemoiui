import React from 'react'
import clsx from 'clsx'

type FormBody = {
    title?: string;
    description?: string;
    titleClassName?: string;
    descriptionClassName?: string;
    className?: string;
}

export const FormBody = ({children, title, description, titleClassName, descriptionClassName, className}:React.PropsWithChildren<FormBody>) => {
    return (
        <form className={clsx('flex flex-col', className)}>
            <h1 className={clsx('text-2xl md:text-4xl', titleClassName)}>{title}</h1>
            <div className={clsx('text-xs md:text-lg my-2 md:my-5 text-gray-500', descriptionClassName)}>{description}</div>
            {children}
        </form>
    )
}
