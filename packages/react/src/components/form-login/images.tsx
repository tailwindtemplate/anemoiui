import React, {PropsWithChildren} from 'react'
import {background} from '../../../const'
import clsx from 'clsx'

type Images = {
    className?:string
}

export const Images = ({className}:PropsWithChildren<Images>) => {
    return (
        <img className={clsx('rounded-xl', className)} src={background.img} />
    )
}
