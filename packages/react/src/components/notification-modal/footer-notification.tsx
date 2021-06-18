type FooterNotification = {
  className?: string
  label?: string,
  labelClassName?: string,
}
const ClassName = 'bg-white rounded-bl-lg	rounded-br-lg border-l border-b	border-r flex'
const LabelClassName = 'px-4 py-2 text-blue-500 font-semibold text-sm cursor-pointer'
export const FooterNotification = ({ className = ClassName, label, labelClassName = LabelClassName }: FooterNotification) => {
    return (
        <div className={className}>
            <p className={labelClassName}>{label}</p>
        </div>
    )
}