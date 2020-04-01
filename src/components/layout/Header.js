import React from 'react';
import { Link } from 'react-router-dom'

const pstyle = {
    background: '#f4f4f4',
    padding: '10px',
    textAlign: 'center',
    borderRadius: '20px',
    borderStyle: 'solid'
}



class Header extends React.Component{
  render(){
    return(
      <header style={pstyle}>
        <h1 >Header</h1>
        <Link to="/">Home</Link> | 
        <Link to="/CRUD">CRUD</Link> |
        <Link to="/Sandbox">ClassExample</Link>
        </header>
    )
  }
}

export default Header;
