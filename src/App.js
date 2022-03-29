import logo from './logo.svg';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

<div className = "background"> 

</div>

<div className="container">
  <div className="row">

    <div className="col-md-4">a</div>
    <img src ="hanzo.jpg"></img>
    <div className="col-md-4">b</div>
    <div className="col-md-4">c</div>
  </div>
</div>

    </div>
  );
}

export default App;
