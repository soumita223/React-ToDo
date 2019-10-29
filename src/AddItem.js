import React, { Component } from 'react'

export class AddItem extends Component {
    state = {
        title: ''
    }

    addTodo=this.addTodo.bind(this);
   

    addTodo(event)
    {
        
        this.setState({
           [event.target.name]:event.target.value
        });
    }

    onSubmit=(event)=>
    {
        event.preventDefault();
        
        this.props.addToArray(this.state.title);
        this.setState({
            title: ''

        })


    }



    render() {
        return (
            
                <form style={formStyle} onSubmit={this.onSubmit}>
                    <input
                          type="text"
                          name="title"
                          id="item"
                          value={this.state.title}
                          placeholder="Add todo..."
                          onChange={this.addTodo} />
                          
                    <input type="submit"
                           value="Add"
                           className="btn"/>
                          

              
                <h3>{this.state.title}</h3>
                </form>

                
            
        )
    }
}

const formStyle={
    background :'#555',
    color : '#333',
    //textAlign:'center'
    

}

export default AddItem
