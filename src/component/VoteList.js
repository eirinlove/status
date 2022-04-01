import React, { useEffect, useState } from 'react'; 
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import '../css/VoteList.scss';


function VoteItem(props){

    let { id } = useParams();
    let [total, totalCha] = useState(true);
    useEffect(()=>{
    let Timer = setTimeout(()=>{ totalCha(false)}, 1000);
    console.log("ㅎㅎ");
    },[total]);    



let [inputData, inputDataCha] = useState('');

let Box = styled.div`

padding : 20px;
`;

let Titles = styled.h4`

color: ${ props => props.colors}
`;

return (

    <div> 어디로부터 오셨을까 {id} 
    
   <div>

   <img src ={props.image[id].src}></img>
   </div>
    <Box>
        <Titles colors={'red'}>dd</Titles></Box>
        <div className="SassTest">SassTest</div>
    {
    total === true
    ? <div className="alert-warning">
     <p> !! 집계율 !!</p></div>
     : null }

{inputData} {/* 이 경우 inputdata가 바뀔때마다 업데이트가 일어난다  = useEffect를 다시 실행한다.*/}
<input onChange={(e)=>{ inputDataCha(e.target.value)}}/>
    </div>
    
)


}

function totalModal(props){


}

export default VoteItem;