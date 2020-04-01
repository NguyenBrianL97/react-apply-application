import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {createStore, combineReducers} from 'redux';
import rootReducer from './reducer'
import empAction from './action/employeeAction';
import studAction from './action/studentAction';
import petAction from './action/petAction';

const initialState={empReducer:{empid:'E001',empname:'Brian',contact:225588,dept:'IT'},studReducer:{stuid:'S001',stuname:'John',rollno:7},petReducer:{petid:'P000',petname:'Gooby',race:'Cat'}};
const store = createStore(rootReducer, initialState)
console.log(store.getState());

store.dispatch(empAction());
store.dispatch(studAction());
store.dispatch(petAction());
console.log(store.getState());

ReactDOM.render(<App/>, document.getElementById('root'));


