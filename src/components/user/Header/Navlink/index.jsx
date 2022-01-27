const Navlink = ( {children, href }) => {
    return (
        <li className="nav-item">
            <a href={href} className="nav-link">{children}</a>
        </li>
    )
}

export default Navlink;