import {createStore} from 'redux';
import rootReducer from './../reducer';

//import empAction from './../action/employeeAction';
//import empReducer from './reducer/employee';
//import studReducer from './reducer/student';
//import studAction from './action/studentAction';
//import petReducer from './reducer/pet';
//import petAction from './action/petAction';

//import {empAction} from './../Actions';


//const reducersCombination=combineReducers({emp:empReducer,stud:studReducer,pet:petReducer});
//const initialState={emp:{empid:'E001',empname:'Brian',contact:225588,dept:'IT'},stud:{stuid:'S001',stuname:'John',rollno:7},pet:{petid:'P000',petname:'Gooby',race:'Cat'}};
const initialState={empReducer:{empid:'E001',empname:'Brian',contact:225588,dept:'IT'},studReducer:{stuid:'S001',stuname:'John',rollno:7},petReducer:{petid:'P000',petname:'Gooby',race:'Cat'}};
const mystore=createStore(rootReducer,initialState); //third parameter for redux developmental tools
//console.log(mystore.getState());

//mystore.dispatch(empAction());
//mystore.dispatch(studAction());
//mystore.dispatch(petAction());
//console.log(mystore.getState());

export default mystore;