import React from 'react'

type FormHeader = {
    className?: string;
}

export const FormHeader = ({children, className}:React.PropsWithChildren<FormHeader>) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}
