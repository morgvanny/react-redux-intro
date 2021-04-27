import React, { Component } from "react";

export default class NewPerson extends Component {
  state = { name: "" };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ name: "" });
    this.props.addPerson(this.state.name);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input
            onChange={this.handleChange}
            id="name"
            name="name"
            value={this.state.name}
          />
          <br />
          <br />

          <input type="submit" value="Create New Person" />
        </form>
      </div>
    );
  }
}
