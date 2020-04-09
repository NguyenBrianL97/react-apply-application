import React from 'react';
import mystore from './../store';
import {empAction} from './../action';
import {studAction} from './../action';

import { connect } from 'react-redux'

function Reduxexp(props)
{
    return(<div>
        <table border='1'>
            <thead>
                <tr>
                    <td>Emp Id</td>
                    <td>Emp Name</td>
                    <td>Contact No</td>
                    <td>Dept</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{props.empReducer.empid}</td>
                    <td>{props.empReducer.empname}</td>
                    <td>{props.empReducer.contact}</td>
                    <td>{props.empReducer.dept}</td>
                </tr>
            </tbody>
        </table><br/><br/>
        <button type="button" onClick={props.empUpdate}>Update EmpDetails</button><br/><br/>
        <table border='1'>
            <thead>
                <tr>
                    <td>Stud Id</td>
                    <td>Stud Name</td>
                    <td>Roll No</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{mystore.getState().studReducer.stuid}</td>
                    <td>{mystore.getState().studReducer.stuname}</td>
                    <td>{mystore.getState().studReducer.rollno}</td>
                </tr>
            </tbody>
        </table><br/><br/>
        <button type="button" onClick={()=>mystore.dispatch(studAction())}>Update StudDetails</button><br/><br/>
    </div>)
}

const mappingStateToProps=(state)=>
{
    return{
        empReducer:state.empReducer,
        studReducer:state.studReducer
    }
}
const mappingDispatchToProps=(dispatch)=>
{
    return{
        empUpdate:()=>{dispatch(empAction())},
        studUpdate:()=>{dispatch(studAction())},
    }
}
export default connect(mappingStateToProps,mappingDispatchToProps)(Reduxexp);