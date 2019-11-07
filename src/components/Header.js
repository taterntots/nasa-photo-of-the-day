import React, { useState } from 'react';
import Logo from '../assets/nasa-logo.png';
import styled from "styled-components";
import {
    DropdownToggle, DropdownMenu, DropdownItem, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown,
} from 'reactstrap';

const LogoImage = styled.img`
  width: 20%;
`

const Header = props => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <header>
            <Navbar color="light" light expand="md">
                <LogoImage alt="logo for NASA" src={Logo} />
                <NavbarBrand>{props.title}</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink>{props.date}</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                More Dates
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Option 1
                                </DropdownItem>
                                <DropdownItem>
                                    Option 2
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Reset
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
            {/* <Jumbotron>
                <img className='nasaLogo' alt="logo for NASA" src={Logo} />
                <h1 className="display-3">Space Stuff</h1>
                <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>
                    {props.date}
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Dates</DropdownItem>
                    <DropdownItem>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>More Dates</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
            </Jumbotron> */}
        </header>
    )
}

export default Header;