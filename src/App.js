/* eslint-disable */
import logo from './logo.svg';
import React, {useState} from 'react';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import {name, cName, dataV} from './data.js';
import './App.css';




function App() {

  let [image, imageChanger] = useState(dataV);

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

    
    <Example image={image}/>
    <Example image={image}/>
    <Example image={image}/>
  </div>
</div>

    </div>
  );
}



function Example(props){

  return (


<div className="col-md-4">{props.image[0].src}
    
    </div>
  )
}



export default App;
