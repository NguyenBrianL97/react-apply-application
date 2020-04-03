import React,{component} from 'react';
import mystore from './../store';
import {empAction} from './../action';
import {studAction} from './../action';

function Reduxexp()
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
                    <td>{mystore.getState().empReducer.empid}</td>
                    <td>{mystore.getState().empReducer.empname}</td>
                    <td>{mystore.getState().empReducer.contact}</td>
                    <td>{mystore.getState().empReducer.dept}</td>
                </tr>
            </tbody>
        </table><br/><br/>
        <button type="button" onClick={()=>mystore.dispatch(empAction())}>Update EmpDetails</button><br/><br/>
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

export default Reduxexp;