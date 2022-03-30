/* eslint-disable */
import logo from './logo.svg';
import React, {useState} from 'react';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import {name, cName, dataV} from './data.js';
import './App.css';

import { Link, Route, Switch } from 'react-router-dom';

import External from './component/External.js'


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
        <Nav.Link><Link to="/">메인</Link></Nav.Link>
        <Nav.Link><Link to="detail">진행 투표 현황</Link></Nav.Link>
        <NavDropdown title="더보기" id="basic-nav-dropdown">
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




<Route exact path="/">
  <div>메인페이지</div>
  <External/>
  <div className = "background"> 
  </div>

  <div className="container">
  <div className="row">

    { image.map((a, i)=> {return <Example image={image[i]} i={i+1} /> // a는 데이터 자체, i는 데이터의 번째 수.
    })
    }

  {/* <Example image={image[0]}/>
  <Example image={image[1]}/>
  <Example image={image[2]}/> */}
  </div>
</div>
</Route>



<Route path="/detail">
<div> 다른 페이지</div>
</Route>







    </div>
  );
}







function Example(props){

  return (


<div className="col-md-4">{props.i}번째 이미지<img src={props.image.src} style={{ width: 100, height:200}} ></img> 
    
    </div>
  )
} 
// 위에서 image[0].src 이 아닌 image.src 인 이유는, 
//<Example image=[image[0]} 부분에서 이미 0번째, 1번째 배열을 image 변수로 정의했기 때문에.
// 가져오겠음을 말했기에, 이것은 더이상 배열로써가 아닌 문자열 데이터로써 정의 되었기 때문.



export default App;
