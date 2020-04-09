import {createStore} from 'redux';
import rootReducer from './../reducer';

const initialState={empReducer:{empid:'E001',empname:'Brian',contact:225588,dept:'IT'},studReducer:{stuid:'S001',stuname:'John',rollno:7},petReducer:{petid:'P000',petname:'Gooby',race:'Cat'}};
const mystore=createStore(rootReducer,initialState); //third parameter for redux developmental tools

export default mystore;