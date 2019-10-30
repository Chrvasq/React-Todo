import React, { Component } from "react";

class ToDoForm extends Component {
  constructor() {
    super();
    this.state = {
      task: ""
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.task !== "") {
      this.props.addToDo(this.state.task);
      this.setState({ task: "" });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="task"
            value={this.state.task}
            onChange={this.handleChange}
            placeholder="Enter in a task"
          />
          <button>Add</button>
        </form>
        <button onClick={this.props.clearCompleted}>Clear Completed</button>
      </div>
    );
  }
}

export default ToDoForm;
