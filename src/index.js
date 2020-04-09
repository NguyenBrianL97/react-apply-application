import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import mystore from './store';
import {Provider} from 'react-redux';


ReactDOM.render(<Provider store={mystore}>
  <App/>
</Provider>,document.getElementById('root'));