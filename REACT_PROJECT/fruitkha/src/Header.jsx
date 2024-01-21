import React, { useContext, useState } from 'react';
import { NavbarToggle } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { control, user } from './App';

function Header() {
  const {isLoggedIn,setLoggedIn} = useContext(control);
  const{LoginUser,setLoginUser} = useContext(user);

  const onLogout = ()=>{
          if(window.confirm("Are you sure want to logout ?"))
          {
          setLoggedIn(false);
          setLoginUser("Guest")
          
          alert("Logging Out Successfully...!");
  }
}


  return (
    <Navbar expand="lg" className="head"  fixed="top">
      <Container>
        <Navbar.Brand href="#"><img src='https://themewagon.github.io/fruitkha/assets/img/logo.png' style={{height:50, width:150}}/> </Navbar.Brand>
        <NavbarToggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse >
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '500px' }}
          >
            <Link to='/' className='menu home'>Home</Link>
            <Link to='/about' className='menu'>About</Link>
            <Link to='/news' className='menu'>News</Link>
            <Link to='/contact' className='menu'>Contact</Link>
            <Link to='/shop' className='menu '>Shop</Link>
          </Nav>
          <Form className="d-flex justify-content-center contact-btns">
            
            <Button className='btns' variant="outline-success me-3"><Link to='/search'>Search</Link></Button>
            {
              isLoggedIn?(
                <>
                <Button onClick={onLogout} className='btns' variant="outline-success me-3"><Link to='/'>Sign-out</Link></Button>
                <div className='d-flex align-content-center '>
                        <div className='firstletter text-light me-3 fs-4'>{LoginUser.charAt(8)}</div>
                        <h4 className='text-light fw-bold pt-2'>{LoginUser}</h4>
                </div>
                </>): (
                <><Button className='btns' variant="outline-success me-3"><Link to='/signin'>Sign-in</Link></Button>
              <Button className='btns' variant="outline-success me-3"><Link to='/signup'>Sign-up</Link></Button>
              <div className='d-flex align-content-center '>
                        <div className='firstletter text-light me-3 fs-4'>G</div>
                        <h4 className='text-light fw-bold pt-2'>{LoginUser}</h4>
                </div> 
              </>)
            }
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;