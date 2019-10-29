import React, { Component } from 'react'

export class Logged extends Component {
    constructor(props){
    super(props);
    let isLogged=true;
    /*this.state = {
        isLogged = true
    };*/
    }

    render() {
        return (
            <div>
                <h1>React Rendering</h1>
              
                    <button>LogIn</button>
            
                
                    <button>LogOut</button>
                
            </div>
        )
    }
}

export default Logged;
