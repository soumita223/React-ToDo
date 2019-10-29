import React, { Component } from 'react'

export class TodoItem extends Component {
    render() {
        return (
            <div style={Itemstyle}>
                <label>
                <input style={checkboxStyle} type="checkbox" 
                onChange={this.props.markComplete.bind(this, this.props.todo.id)}/>
                {this.props.todo.title} {'       '}
                <button style={buttonStyle}
                onClick={this.props.delItem.bind(this, this.props.todo.id)}>Delete</button>
                </label>
            </div>
        )
    }
}

const Itemstyle = {
    background:'#888',
    color:'#333'
    //textAlign:'center',
    //float:'left'
}

const checkboxStyle = {
    color:'#333'
}

const buttonStyle={
   // background:'blue',
    color:'red'
}

export default TodoItem
