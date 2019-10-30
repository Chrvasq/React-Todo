import React, { Component } from "react";
import ToDoForm from "./components/TodoComponents/TodoForm";
import ToDoList from "./components/TodoComponents/TodoList";
import "./App.css";

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  addToDo = task => {
    this.setState({
      data: [
        ...this.state.data,
        { task: task, id: Date.now(), completed: false }
      ]
    });
  };

  clearCompleted = () => {
    this.setState({ data: this.state.data.filter(task => !task.completed) });
  };

  toggleCompleted = taskID => {
    this.setState({
      data: this.state.data.map(item => {
        if (item.id === taskID) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoList
          data={this.state.data}
          toggleCompleted={this.toggleCompleted}
        />
        <ToDoForm addToDo={this.addToDo} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
