import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function Navigation({ onPageChange }) {
  return (
    <Navbar bg="pink" expand="lg">
      <Container>
        <Navbar.Brand href="#home">My Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => onPageChange('home')}>Home</Nav.Link>
            <Nav.Link onClick={() => onPageChange('blogs')}>Blogs</Nav.Link>
            <Nav.Link onClick={() => onPageChange('contact')}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
