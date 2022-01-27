const DropdownItem = ({children, href}) => {
    return (
        <a href={href} className="dropdown-item">{children}</a>
    )
}

export default DropdownItem;