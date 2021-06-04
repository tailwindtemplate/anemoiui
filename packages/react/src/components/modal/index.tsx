import React, { JSXElementConstructor } from 'react';
import { Footer } from './footer';
import { Header } from './header';
import { Wrapper } from './wrapper';

type Modal = {
    open: boolean
    setOpen: (open: boolean) => void
    theme?: 'dark' | 'light' | string
    title: string
    content: string
    footerType?: 'left' | 'right' | 'center' | 'between' | string
    confirm?: { onClick: () => void, label: string, IconLeft?: JSXElementConstructor<any>, IconRight?: JSXElementConstructor<any>, className?: string }
    cancel?: { onClick: () => void, label: string, IconLeft?: JSXElementConstructor<any>, IconRight?: JSXElementConstructor<any>, className?: string }
}

export const Modal = ({ open, setOpen, theme = 'light', title, content, confirm, cancel, footerType }: Modal) => {
    return (
        <Wrapper open={open} setOpen={setOpen} theme={theme}>
            <Header label={title} theme={theme} />
            {content}
            <Footer confirm={confirm} cancel={cancel} theme={theme} type={footerType} />
        </Wrapper>
    )
}

Modal.Wrapper = Wrapper
Modal.Header = Header
Modal.Footer = Footer
