import React from 'react';
import {Table} from 'react-bootstrap'; // 중괄호, table, 중괄호 없음. 함수에서 리턴하는 것. 
import { connect } from 'react-redux';

function VoteDataLoad(props){

    return (

        <div>

            <Table responsive>
                <thread>
                    <tr>
                        <th>#</th>
                        <th>{props.state[0].name}</th>
                        <th>{props.state[0].quan}</th>
                        <th><button onClick={()=>{props.dispatch({type : '수량증가'})}}>+</button></th>
                        <th><button onClick={()=>{props.dispatch({type : '수량감소'})}}>-</button></th>
                    </tr>
                </thread>
            </Table>

        { props.alertTab === true
            ? (<div className="my-alert2">
            <p>ㅇㅇ</p> </div>) :null }


            <button onClick = {()=>{props.dispatch({type : '닫기'})}}>닫기</button>
        
        </div>
    )
}

function dataSource(state){

    return{
        state : state.quanModify,
        alertTab : state.alertRemote //props 화됨
    }

}

export default connect(dataSource)(VoteDataLoad);