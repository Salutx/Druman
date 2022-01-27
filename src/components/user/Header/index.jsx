import './index.css';
import Container from '../../Container'
import DropdownItem from './DropdownItem';
import Nav from './Nav'
import Navlink from './Navlink';
import Navbrand from './Navbrand';
import NavbarToggler from '../../Buttons/NavbarToggler';
import LearnMore from '../../Buttons/LearnMore';

const Header = () => {
    return (
        <header>
            <Nav>
                <Container>
                    <Navbrand/>
                    
                    <NavbarToggler/>
                    
                    <div className="navbar-collapse justify-content-end collapse" id='navbarSupportedContent'>
                        <ul className='navbar-nav'>
                            <Navlink href={'/'}>
                                Home
                            </Navlink>

                            <li className='nav-item'>

                                <div className="dropdown">
                                    <a href="/" className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="true">
                                    Features
                                </a>

                                <div className='dropdown-menu' data-bs-popper="none">
                                    <DropdownItem href={'/'}>Item 1</DropdownItem>
                                    <DropdownItem href={'/'}>Item 2</DropdownItem>
                                    <DropdownItem href={'/'}>Item 3</DropdownItem>
                                </div>
                                </div>
                            </li>
                            
                            <Navlink href={'/'}>
                                Pricing
                            </Navlink>

                            <LearnMore />
                        </ul>
                    </div>
                </Container>
            </Nav>
        </header>
    )
}

export default Header;