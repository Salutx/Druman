const NavbarToggler = () => {
    return (
        <button 
            className='navbar-toggler collapsed'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent' 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Open navegation">
            <span className='navbar-toggler-icon'>
                <i className="fas fa-chevron-down" aria-hidden="true"></i>
            </span>
        </button>
    )
}

export default NavbarToggler;