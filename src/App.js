import React, { Component } from "react";
import ToDoForm from "./components/TodoComponents/TodoForm";

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
    console.log("Added ToDo: ", task);
    this.setState({
      data: [
        ...this.state.data,
        { task: task, id: Date.now(), completed: false }
      ]
    });
  };

  // toggleCompleted = task => {
  //   console.log('Completed: ', task);

  // }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoForm addToDo={this.addToDo} />
      </div>
    );
  }
}

export default App;
