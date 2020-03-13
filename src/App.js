import React from 'react';
import './App.css';
import Form from './components/Form.js'
import Top from './components/Top.js'
import Bottom from './components/Bottom.js'

function App() {
  return (
    <div className="App">
      <Top/>
      <Form/>
      <br/>
      <Bottom/>
    </div>
  );
}

export default App;
