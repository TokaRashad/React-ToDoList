import React, {Component} from "react";
import "./todoapp.css"

class ToDoApp extends Component{
    state = {
        todoEl: "",
        todoList: [],
    }

    handleChange = (e) => {
        this.setState({
            todoEl: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            todoList: [...this.state.todoList, this.state.todoEl],
            todoEl: "",
        })
    }

    handleDelete = (itemDeleted) => {
        console.log(itemDeleted);
        var newList = this.state.todoList.filter(i => i != itemDeleted)
        this.setState({
            todoList:newList,
        })
    }
    
    render(){
        return(
            <div className="to-do-app">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Type Here..." className="txt-inp" onChange={this.handleChange} value={this.state.todoEl}/>
                    <input type="submit" value="Add" className="submit"/>
                </form>
                    <ul className="list">
                        {this.state.todoList.map((item, i) => {
                            return <li className="list-item" key={item}>{item}
                            <button className="delete-btn" onClick={() => this.handleDelete(item)}>Delete</button>
                            </li>
                        })}
                    </ul>    
            </div>
        )
    }
}

export default ToDoApp;