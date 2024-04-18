import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <Link to={'/'} className='text-decoration-none text-white fw-bold'>
              <i className="fa-solid fa-book-open-reader"></i>{' '}
              Edu-Guru
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link><Link to={'/'} className='text-decoration-none text-white fw-bold'>Home</Link></Nav.Link>
              <Nav.Link><Link to={'/register'} className='text-decoration-none text-white fw-bold'>Register</Link></Nav.Link>
              <Nav.Link><Link to={'/list'} className='text-decoration-none text-white fw-bold'>List</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header