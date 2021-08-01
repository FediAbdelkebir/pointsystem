import React, { Component } from "react";
import "./SearchUsers.css";

class SearchUsers extends Component {
  state = { value: "" };

  onChangeHandler = e => {
    this.setState({ value: e.target.value }, () => {
      this.props.searchUsers(this.state.value);
    });
  }

  render() {
    return (
      <input
        type="text"
        placeholder="Filter by name..."
        name="name"
        onChange={ this.onChangeHandler }
        className="Search-Student-Input"
      />
    );
  }
}

export default SearchUsers;
