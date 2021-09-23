import React, { PropsWithChildren } from 'react'

export function Hero({ children }: PropsWithChildren<unknown>): JSX.Element {
    return <div className="border-4 border-gray-100 max-w-7xl text-center px-8 py-4">{children}</div>
}
