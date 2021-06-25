import React from 'react'
import clsx from 'clsx'

type Input = {
    className?:string;
    textUser?:string;
    textUserName?:string;
    textPass?:string;
    textPassName?:string;
}

export const InputPhone = ({ children, className}:React.PropsWithChildren<Input>) => {
    return (
        <div className={clsx('text-base', className)}>
            <input placeholder="Số điện thoại"></input>
            {children}
        </div>
    )
}
export const FormUser = ({ children, className}:React.PropsWithChildren<Input>) => {
    return (
        <div className={clsx(' text-base', className)}>
            <input placeholder="Email hoặc số điện thoại"></input>
            {children}
        </div>
    )
}
export const FormPass = ({ children, className}:React.PropsWithChildren<Input>) => {
    return (
        <div className={clsx('text-base', className)}>
            <input type="password" placeholder="Mật khẩu"></input>
            {children}
        </div>
    )
}


