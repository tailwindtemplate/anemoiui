import React from 'react'
import clsx from 'clsx'
import { ChevronDownIcon, PhoneIcon, LockClosedIcon, EyeIcon } from '@heroicons/react/outline'
import { FormUser, FormPass } from '../../elements/form-button'
import { Avatar } from '../../elements'

type Input = {
    className?: string;
    firstNumber?: string;
    classFirstNumber?: string;
    name?: string;
    nameUser?: string;
}

export const InputPhoneLogin = ({ children, className, firstNumber, classFirstNumber}:React.PropsWithChildren<Input>) => {
    return (
        <div className={clsx('border border-black text-base rounded-2xl flex p-4', className)}>
            <div className={clsx('flex items-center', classFirstNumber)}>{firstNumber}<ChevronDownIcon className="w-4 h-4 m-0.5" /></div>
            {children}
        </div>
    )
}

export const InputAccount = ({ children, className }:React.PropsWithChildren<Input>) => {
    return (
        <div className={clsx('border border-gray text-base rounded-2xl flex p-4', className)}>
            <div className={clsx('flex items-center',)}><PhoneIcon className="text-gray-500 w-4 h-4 m-0.5"/><FormUser /></div>
            {children}
        </div>
    )
}

export const InputPass = ({ children, className }:React.PropsWithChildren<Input>) => {
    return (
        <div className={clsx('border border-gray text-base rounded-2xl flex justify-between p-4', className)}>
            <div className={clsx('flex items-center')}><LockClosedIcon className="text-gray-500 w-4 h-4 m-0.5" /><FormPass /></div>
            <div className={clsx('flex items-center')}><EyeIcon className="w-4 h-4 m-0.5" /></div>
            {children}
        </div>
    )
}

export const InputUser = ({ children, className, nameUser, name }:React.PropsWithChildren<Input>) => {
    return (
        <div className={clsx('border border-gray text-base rounded-2xl flex p-4', className)}>
            <div className={clsx('flex items-center font-bold text-lg', nameUser)}>
                <Avatar
                    size="sm"
                    src="https://2sao.vietnamnetjsc.vn/images/2021/04/03/17/55/b7e16d30f9e6c365ad0ff0bd2feb5c2d.jpg"
                    isRounded
                />
                {name}
            </div>
            {children}
        </div>
    )
}

