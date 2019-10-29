import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todo extends Component{

    render(){

        return this.props.todos.map((Todo) => (

           <TodoItem todo={Todo} markComplete={this.props.markComplete} 
                     delItem={this.props.delItem}/>
        ));
        

    }

}

export default Todo;

