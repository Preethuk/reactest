import React from 'react'
import {Container,Navbar,Nav,NavDropdown} from 'react-bootstrap'
import App from '../App.css'
import {Link} from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <div>
{/* <Navbar bg="dark"  variant='light'>
  <Container>
    <Navbar.Brand href="#home" style={{color:'white'}}>ZartekTechnologies</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">

      <Nav className="ml-auto">
    <Link to="page"className="data" >Pagination</Link> 
      <Link to="toggle"className="data">Toggle</Link> 
        <Link to="login"className="data">InputDisplay</Link> 
        <Link to="task"className="data">ParentChild</Link> 
       
      </Nav>
         </Navbar.Collapse>
  </Container>
</Navbar> */}

<Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home" style={{color:'white'}}>ZartekTechnologies</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
          <Link to="page"className="data" >Pagination</Link> 
      <Link to="toggle"className="data">Toggle</Link> 
        <Link to="login"className="data">InputDisplay</Link> 
        <Link to="task"className="data">ParentChild</Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}

export default Header