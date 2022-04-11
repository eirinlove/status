/* eslint-disable */
import logo from './logo.svg';
import React, {useState, useContext} from 'react';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import {name, cName, dataV} from './data.js';
import './App.css';
import axios from 'axios';


import { Link, Route, Switch } from 'react-router-dom';

import External from './component/External.js'
import Current from './component/Current.js'
import VoteList from './component/VoteList.js'
import VoteDataLoad from './VoteDataLoad.js'

let testContext = React.createContext();

function App() {

  let [image, imageChanger] = useState(dataV);
  let [first, second] = useState(0);
  var useData = 3;

  return (
    <div className="App">
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link><Link to="/">메인</Link></Nav.Link>
        <Nav.Link><Link to="CurrentPage">진행 투표 현황</Link></Nav.Link>
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



<Switch>
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
  <button className ="btn btn-primary" onClick={()=>{
    axios.get('https://codingapple1.github.io/shop/data2.json')
    .then((result)=>{console.log("성공!!")
              imageChanger([...image, ...result.data ])}) // 데이터 3개를 추가.
    .catch(()=>{console.log("실패!!")}) //db 데이터, json 데이터등 받기
  }}>dd</button>
<testContext.Provider value={useData}>
<Plus></Plus>
</testContext.Provider>
</div>
</Route>



<Route path="/CurrentPage">

<Current first={first}/>

</Route>

<Route path="/votelist/:id"> {/*URL 파라미터, ejs처럼 아무 문자열이나 받아 id로 정의한다는 뜻 */}

<VoteList image={image}/> {/* 본문에 있는 data.js를 참조한 image State를 VoteList로 넘겨 처리하게 함. */}

</Route>

<Route path="/VoteData">
  <VoteDataLoad></VoteDataLoad>
</Route>



</Switch>


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



function Plus(){

  var useData = useContext(testContext);
  return (

    <div className = "foward">useContext{useData}</div>
  )
}
export default App;
