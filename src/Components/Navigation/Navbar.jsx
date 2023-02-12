import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ShoppingCartOutlined } from "@ant-design/icons"
import logo from '../../Assets/Welcome.png'
import { Link } from 'react-router-dom';




function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container className='w-75'>
        <Navbar.Brand><img src={logo} alt="" height={50} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link eventKey="1">Home</Nav.Link>
            <Nav.Link eventKey="2"><Link to='/cart'>Cart</Link></Nav.Link>
            <Nav.Link eventKey="3">Account</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link><ShoppingCartOutlined /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;