import React from 'react'
import clsx from 'clsx'
import { Avatar } from '../../elements'

type FormUser = {
    className?: string;
    firstNumber?: string;
    classFirstNumber?: string;
    name?: string;
    nameUser?: string;
}

export const UserName = ({ className, nameUser, name }:FormUser) => {
    return (
        <div className={clsx('flex items-center border-2 p-2 rounded-3xl', className)}>
            <Avatar
                size="sm"
                src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
                isRounded
            />
            <div className={clsx('text-lg font-bold text-gray-900 mx-2', nameUser)}>{name}</div>
        </div>
    )
}

