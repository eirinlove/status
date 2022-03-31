import React, { useState } from 'react'; 
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import '../css/VoteList.scss';


function VoteItem(props){


let { id } = useParams();


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
    
        <div className="alert-warning">
            <p> !! 집계율 !!</p></div>
    </div>
    
)
}

export default VoteItem;