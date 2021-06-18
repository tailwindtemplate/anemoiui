import React, { memo, useRef, useEffect } from 'react'
import { usePrevious } from '../../hooks/use-previous'
import clsx from 'clsx'

export interface SingleOTPInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    focus?: boolean
}

export function SingleOTPInputComponent({
    focus,
    autoFocus,
    className = 'border-b-2 w-8 text-center p-2 focus:bg-gray-100',
    ...rest
}: SingleOTPInputProps) {
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
            className={clsx('focus:outline-none', className)}
        />
    )
}

const SingleOTPInput = memo(SingleOTPInputComponent)

export default SingleOTPInput
