import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export class Header extends Component {
    render() {
        return (
           
                <header style={headerStyle}>
                <h1>ToDo App</h1>
                <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} 
                      to="/add">Add</Link>
                </header>
          
        )
    }
    
}

const headerStyle={
    background :'#555',
    color : '#fff',
    textAlign:'center',
    
    

}

const linkStyle={
   
    color : '#fff',
    textAlign:'center',

}

export default Header
