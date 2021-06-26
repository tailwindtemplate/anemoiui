import React from 'react'
import clsx from 'clsx'
import { Avatar } from '../../elements'

type Input = {
    className?: string;
    firstNumber?: string;
    classFirstNumber?: string;
    name?: string;
    nameUser?: string;
}

export const InputUser = ({ children, className, nameUser, name }:React.PropsWithChildren<Input>) => {
    return (
        <div className={clsx('border border-gray text-base rounded-2xl flex p-2', className)}>
            <div className={clsx('flex items-center font-bold text-lg', nameUser)}>
                <Avatar
                    size="sm"
                    src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
                    isRounded
                />
                <div className={clsx('ml-4', nameUser)}>{name}</div>
            </div>
            {children}
        </div>
    )
}

