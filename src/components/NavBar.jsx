import {Navbar, Nav, Container} from 'react-bootstrap';
import logo from '../assets/img/79QtjF-LogoMakr.png';

function NavBar() {
  return (
    <>
      <Navbar expand="md" className='my-navbar'>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav'>
            <span className='navbar-toggler-icon'></span>
          </Navbar.Toggle>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className="me-auto">
              <Nav.Link href="#home" className='nav-link' >Home</Nav.Link>
              <Nav.Link href="#projects" className='nav-link'>Projects</Nav.Link>
              <Nav.Link href="#skills" className='nav-link'>Skills</Nav.Link>
              <Nav.Link href="#contact" className='nav-link'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;