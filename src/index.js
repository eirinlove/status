import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

// let DState = createStore(()=>{return [{id : 0, name : '안녕하세요', quan : 3}] }); 

let DState = [ { id :  0, name : '안녕하세요', quan : 3}];
let DState2 = true;



function quanModify(state = DState, action){

  if ( action.type === '수량증가'){

  let copy  =  [...state]
  copy[0].quan++; 

return copy;
  }
  else if ( action.type === '수량감소' && state[0].quan != 0){

    let copy = [...state]
    copy[0].quan--;
  
return copy;
  }
  else{

    return state;
  }
}

function alertRemote(state = DState2, action){ 

  if(action.type === '닫기' && state == true){ 

    state = false; 
   }

  else if (action.type === '닫기' && state == false){ 
    
    state = true;
     }
    
  return state;
}

let store = createStore(combineReducers({quanModify, alertRemote}));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
