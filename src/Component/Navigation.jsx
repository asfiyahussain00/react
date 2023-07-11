import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



function Navigation() {
  return (
   <>
    
    <Navbar expand="lg" className="bg-dark">
      <Container>
        <Link to ="/" className='text-white text-decoration-none'>Shopping-mart</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className='nav-link text-white'to='/'>Home </Link>
           < Link className='nav-link text-white'to='Products'>Products</Link>
           < Link className='nav-link text-white'to='login'>login</Link>
           <Link className='nav-link text-white btn btn light'to='Signup'>Signup</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
  );
}

export default Navigation
