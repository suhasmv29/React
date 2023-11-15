export default function Tabs ({onSelect, children, isSelected, ...props}) {
    return (
        <li><button {...props} className={`${isSelected ? 'active' : undefined}`}>{children}</button></li>
    )
}