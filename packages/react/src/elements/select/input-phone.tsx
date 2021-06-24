import React from 'react'
import clsx from 'clsx'

type InputPhone = {
    className?:string;
}

export const InputPhone = ({ children, className}:React.PropsWithChildren<InputPhone>) => {
    return (
        <div className={clsx('text-base', className)}>
            <input placeholder="Số điện thoại"></input>
            {children}
        </div>
    )
}


