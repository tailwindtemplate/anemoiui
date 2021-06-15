import React from 'react'

export function Heading1({children}: React.PropsWithChildren<any>) {
    return (<h1 className="text-4xl font-bold">{children}</h1>)
}

export function Heading2({children}: React.PropsWithChildren<any>) {
    return (<h2 className="text-3xl font-medium">{children}</h2>)
}

export function Heading3({children}: React.PropsWithChildren<any>) {
    return (<h3 className="text-2xl font-bold">{children}</h3>)
}

export function Heading4({children}: React.PropsWithChildren<any>) {
    return (<h4 className="text-xl font-medium">{children}</h4>)
}

export function Heading5({children}: React.PropsWithChildren<any>) {
    return (<h5 className="text-lg font-medium">{children}</h5>)
}

export function Heading6({children}: React.PropsWithChildren<any>) {
    return (<h6 className="text-md font-medium">{children}</h6>)
}

export function Subtitle1({children}: React.PropsWithChildren<any>) {
    return (<div className="text-sm font-medium">{children}</div>)
}

export function Subtitle2({children}: React.PropsWithChildren<any>) {
    return (<div className="text-xs">{children}</div>)
}

export function Body1({children}: React.PropsWithChildren<any>) {
    return (<div className="text-sm font-medium">{children}</div>)
}

export function Body2({children}: React.PropsWithChildren<any>) {
    return (<div className="text-xs">{children}</div>)
}
