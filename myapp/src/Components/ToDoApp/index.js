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
    
    render(){
        return(
            <div className="to-do-app">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Type Here..." className="txt-inp" onChange={this.handleChange} value={this.state.todoEl}/>
                    <input type="submit" value="Add" className="submit"/>
                </form>
                    <ul className="list">
                        {this.state.todoList.map(function (element){
                            return <li className="list-item">{element}</li>
                        })}
                    </ul>    
            </div>
        )
    }
}

export default ToDoApp;