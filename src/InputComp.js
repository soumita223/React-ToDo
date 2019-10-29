import React, {Component} from 'react';

class InputComp extends Component
{
    constructor()
    {
        super()
        this.state = {
            uname : "",
            password:"",
            checked:true

        }
        this.handleEvent = this.handleEvent.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEvent(event)
    {
        const {type, name,value, checked} = event.target
         
        if(type === "checkbox"){

            this.setState({
                [name] : checked
            })
        }
        
        else{
        this.setState({
            [name] : value
        })
    }
    }

    handleSubmit(event)
    {
        alert('Welcome ' + this.state.uname + ' to our site');

    }

            
            
       
    



    render()
    {
        return (
            <form onSubmit={this.handleSubmit}>
            <div>
           
            <label>username</label><br/>
            <input type="text" name="uname"value={this.state.uname} onChange={this.handleEvent}/><br/>
            <label>password</label><br/>
            <input type="password"  name="password"  value={this.state.password} 
                onChange={this.handleEvent} /><br/>
            <input type="checkbox"  name="checked"  value={this.state.checked} 
                onChange={this.handleEvent} />isPresent<br/>
            <input type="radio" name="male"/><br/>
            <input type="radio" name="female"/><br/>


            <select>
                <option value="student">student</option>
                <option value="teacher">teacher</option>
                <option value="manager">manager</option>
            </select>Roles<br/>


            <button type="submit">submit</button>
            <h3>{this.state.uname} {this.state.password} {this.state.checked} </h3>
          
            
            </div>
            </form>
            
    
        );

    }
}



export default InputComp;