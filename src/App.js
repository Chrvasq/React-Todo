import React, { Component } from "react";
import ToDoForm from "./components/TodoComponents/TodoForm";
import ToDoList from "./components/TodoComponents/TodoList";
import SearchForm from "./components/TodoComponents/SearchForm";
import "./App.css";

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      data: [],
      filteredData: []
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
    if (this.state.filteredData.length > 0) {
      this.setState({
        filteredData: this.state.filteredData.filter(task => !task.completed)
      });
    }
    this.setState({ data: this.state.data.filter(task => !task.completed) });
  };

  toggleCompleted = taskID => {
    if (this.state.filteredData.length > 0) {
      this.setState({
        filteredData: this.state.filteredData.map(item => {
          if (item.id === taskID) {
            return { ...item, completed: !item.completed };
          }
          return item;
        })
      });
    }
    this.setState({
      data: this.state.data.map(item => {
        if (item.id === taskID) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    });
  };

  filterData = criteria => {
    this.setState({
      filteredData: this.state.data.filter(item => {
        if (
          criteria !== "" &&
          item.task.toLowerCase().includes(criteria.toLowerCase())
        ) {
          return item;
        }
      })
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <SearchForm
          filterData={this.filterData}
          searchData={this.state.searchData}
        />
        <ToDoList
          data={this.state.data}
          toggleCompleted={this.toggleCompleted}
          filteredData={this.state.filteredData}
        />
        <ToDoForm addToDo={this.addToDo} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
