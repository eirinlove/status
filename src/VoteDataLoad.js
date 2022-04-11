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
                        <th>{props.state[0]}</th>
                    </tr>
                </thread>
            </Table>

        </div>
    )
}

function dataSource(state){

    return{
        state : state
    }

}

export default connect(dataSource)(VoteDataLoad);