import React, { PropsWithChildren } from 'react'

export function ListItem({ children }: PropsWithChildren<unknown>): JSX.Element {
    return <li>{children}</li>
}
