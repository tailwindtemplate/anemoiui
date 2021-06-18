import { PropsWithChildren } from 'react'
type FooterNotification = {
    className?: string
}
const ClassName = 'bg-white rounded-bl-lg	rounded-br-lg border-l border-b	border-r grid grid-cols-2 '
export const FooterNotification = ({ className = ClassName, children }: PropsWithChildren<FooterNotification>) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}