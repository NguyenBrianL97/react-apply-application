import rootReducer from './../reducer';
import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';

const initialState={empReducer:{empid:'E001',empname:'Brian',contact:225588,dept:'IT'},studReducer:{stuid:'S001',stuname:'John',rollno:7},petReducer:{petid:'P000',petname:'Gooby',race:'Cat'},userReducer:[]};

const middleware=[thunk];

//const mystore=createStore(rootReducer,initialState); //third parameter for redux developmental tools
const mystore=createStore(rootReducer,initialState,compose(applyMiddleware(...middleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default mystore;