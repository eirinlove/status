import React, { useState } from 'react'; 
import { useHistory } from 'react-router-dom';


function Current(props){


let history = useHistory();

    return (
  <div> 


    <div> 투표 현황 페이지</div>
    <button className="btn btn-danger" 
    onClick={()=>{ history.goBack();}}>Prev</button>
    <button className="btn btn-danger" 
    onClick={()=>{ history.push('/');}}>Main</button>
    {props.first}
  </div>
  
    )
  }

  export default Current;