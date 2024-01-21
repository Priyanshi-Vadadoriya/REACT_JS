import React from 'react';
import { Navbar, Nav, Container, NavbarBrand, NavbarToggle, NavbarCollapse, NavItem, NavLink } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {/* Left side */}
        <NavbarBrand href="#home">Navbar</NavbarBrand>
        
        {/* Centered */}
        <NavbarToggle aria-controls="basic-navbar-nav" />
        <NavbarCollapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="">
            <NavItem><NavLink href="#home">Home</NavLink></NavItem>
            <NavItem><NavLink href="#link">Link</NavLink></NavItem>
            <NavItem><NavLink href="#link">Link</NavLink></NavItem>
            <NavItem><NavLink href="#link">Link</NavLink></NavItem>
            <NavItem><NavLink href="#link">Link</NavLink></NavItem>
            <NavItem><NavLink href="#link">Link</NavLink></NavItem>
            <NavItem><NavLink href="#link">Link</NavLink></NavItem>
            <NavItem><NavLink href="#link">Link</NavLink></NavItem>
          </Nav>
        </NavbarCollapse>
        
        {/* Right side */}
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <NavItem><NavLink href='/search' className='cart-icon me-2'><i className="fas fa-search"></i></NavLink></NavItem>
            <NavItem><NavLink href='/search' className='cart-icon me-2'><i className="fas fa-search"></i></NavLink></NavItem>
            <NavItem><NavLink href='/search' className='cart-icon me-2'><i className="fas fa-search"></i></NavLink></NavItem>
            <NavItem><NavLink href='/search' className='cart-icon me-2'><i className="fas fa-search"></i></NavLink></NavItem>
            <NavItem><NavLink href='/search' className='cart-icon me-2'><i className="fas fa-search"></i></NavLink></NavItem>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default App;
