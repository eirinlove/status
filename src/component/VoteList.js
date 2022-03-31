import React, { useState } from 'react'; 
import { useHistory, useParams } from 'react-router-dom';


function VoteItem(props){


let { id } = useParams();

return (

    <div> 어디로부터 오셨을까 {id} 
    
   <div>

   <img src ={props.image[id].src}></img>
   </div>
    
    </div>
    
)
}

export default VoteItem;