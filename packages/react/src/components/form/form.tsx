import React from 'react'
import clsx from 'clsx'

type Form = {
    className?: string;
}

export const Form = ({children, className}:React.PropsWithChildren<Form>) => {
    return (
        <div className={clsx('bg-white rounded-xl w-form-sm md:w-form-md border shadow-md p-6 md:p-14', className)}>
            {children}
        </div>
    )
}
