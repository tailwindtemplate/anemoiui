import React, { memo, useRef, useEffect } from 'react'
import { usePrevious } from '../../hooks/use-previous'
import clsx from 'clsx';

export interface SingleOTPInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    focus?: boolean
}

export function SingleOTPInputComponent(props: SingleOTPInputProps) {
    const { focus, autoFocus, className, ...rest } = props
    const inputRef = useRef<HTMLInputElement>(null)
    const prevFocus = usePrevious(!!focus)
    useEffect(() => {
        if (inputRef.current) {
            if (focus && autoFocus) {
                inputRef.current.focus()
            }
            if (focus && autoFocus && focus !== prevFocus) {
                inputRef.current.focus()
                inputRef.current.select()
            }
        }
    }, [autoFocus, focus, prevFocus])

    return (
        <input
            ref={inputRef}
            {...rest}
            className={clsx('block border-b-2 border-gray-300 w-8 text-center text-lg font-semibold p-2 focus:bg-gray-100 focus:outline-none', className)}
        />
    )
}

const SingleOTPInput = memo(SingleOTPInputComponent)

export default SingleOTPInput
