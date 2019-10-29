import React, {Component} from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import InputComp from './InputComp';
import Todo from './Todo';
import AddItem from './AddItem';
import uuid from 'uuid';
import Header from './Header';
import axios from 'axios'
//import React from 'react';
//import ReactDOM from 'react-dom';

class ReacTrial extends Component{

  state = {
    todos : [
      {
        id : uuid.v4(),
        title: "Learn Node js",
        completed:true
      },
      {
        id : uuid.v4(),
        title: "Learn Hapi js",
        completed:true

      },
      {
        id : uuid.v4(),
        title: "Learn Express js",
        completed:true

      },
      {
        id : uuid.v4(),
        title: "Learn React js",
        completed:true

      },
      {
        id : uuid.v4(),
        title: "Learn Next js",
        completed:true

      }


    ]
  }

  /*componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState((
      {
        todos:res.data
      })))


  }*/
  markComplete = this.markComplete.bind(this);
  delItem = this.delItem.bind(this);
  

  markComplete(id){
  console.log(id);

   this.setState({

    todos:
    this.state.todos.map(todo => {
      if(todo.id === id)
      {
        todo.completed = !todo.completed
      }
      return todo;
    })

   })
    
  }

  delItem(id)
  {
    alert("clicked");
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
  }
  addTorray = (title) =>
  {
   alert('title');
    const newTodo = {
      id:uuid.v4(),
      title,
      completed:false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    });

  }


  render() {

    return (
    <Router>
    <div className="container">
    <Header/>

   
    
    <Route path='/' render={props => (
      
        <Todo todos={this.state.todos} 
          markComplete={this.markComplete} 
          delItem={this.delItem} />
    

      
    )} />
    
    <Route path="/add" render={props => (

<React.Fragment>
   <AddItem addToArray={this.addTorray}/>
</React.Fragment>

)} />
  
   </div>
   </Router>
    )
}

}



export default ReacTrial ;