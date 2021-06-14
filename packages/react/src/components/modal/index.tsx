import React, { JSXElementConstructor, PropsWithChildren } from 'react'
import { Footer } from './footer'
import { Header } from './header'
import { Wrapper } from './wrapper'

type Modal = {
    open: boolean
    setOpen: (open: boolean) => void
    theme?: 'dark' | 'light' | string
    title: string
    footerType?: 'left' | 'right' | 'center' | 'between' | string
    confirm?: { onClick: () => void, label: string, IconLeft?: JSXElementConstructor<any>, IconRight?: JSXElementConstructor<any>, className?: string }
    cancel?: { onClick: () => void, label: string, IconLeft?: JSXElementConstructor<any>, IconRight?: JSXElementConstructor<any>, className?: string }
}

export const Modal = ({ open, setOpen, theme = 'light', title, children, confirm, cancel, footerType }: PropsWithChildren<Modal>) => {
    return (
        <Wrapper open={open} setOpen={setOpen} theme={theme}>
            <Header label={title} theme={theme} />
            {children}
            <Footer confirm={confirm} cancel={cancel} theme={theme} type={footerType} />
        </Wrapper>
    )
}

Modal.Wrapper = Wrapper
Modal.Header = Header
Modal.Footer = Footer
