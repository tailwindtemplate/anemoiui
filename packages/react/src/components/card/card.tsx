import React, { PropsWithChildren } from 'react'

export function Card({ children }: PropsWithChildren<unknown>): JSX.Element {
    return <div className="border border-gray-200 max-w-7xl text-center px-8 py-4 rounded-md">{children}</div>
}
