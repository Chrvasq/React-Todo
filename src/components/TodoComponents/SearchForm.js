import React, { Component } from "react";

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.filterData(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="input"
            value={this.state.input}
            onChange={this.handleChange}
            placeholder="Search by task"
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default SearchForm;
