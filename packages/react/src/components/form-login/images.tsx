import React, {PropsWithChildren} from 'react'
import {background} from '../../../const'
import clsx from 'clsx'

type Images = {
    className?:string
}

export const Images = ({className}:PropsWithChildren<Images>) => {
    return (
        <div className="">
            <img className={clsx('w-full h-full rounded-xl', className)} src={background.img} />
        </div>
    )
}
