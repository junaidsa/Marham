import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';


  function Header() {

   
  return (
<>
<Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">M Abd</Navbar.Brand>
        <Nav className="me-auto">
            
            <NavDropdown title="Find Doctors" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Dermatologist</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Gynecologist
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Psychiatrist</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Psychologic</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Urologist</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">General Physician</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Gastroenterologist</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Pediatrician</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">General Practioner</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Mutritionist</NavDropdown.Item>
             
            </NavDropdown>
            <NavDropdown title="Hospitals" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Hospitals in Lahore</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Hospitals in Karachi</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Hospital in Islamabad</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">All Hospitals (City Wise)</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        
          <Nav>
            <Nav.Link href="#deets">Surgeries</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Medicines
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Shop
            </Nav.Link>
            <NavDropdown title="Lab-Tests" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Labs in Lahore</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Labs in Karachi</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Labs in Islamabda</NavDropdown.Item>
              
              <NavDropdown.Item href="#action/3.4">Labs in Pakistan</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link eventKey={2} href="#memes">
              Blog
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Forum
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Join as Doctor
            </Nav.Link>
            {/* <Button as="input" type="button" value="Input" /> */}
            <Button className="btn-primary m-2"> <FontAwesomeIcon icon={faPhone} /></Button>
            <Button variant="outline-primary">Login</Button>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</>

  )
}

export default Header;