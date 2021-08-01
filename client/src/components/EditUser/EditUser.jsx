import React, { Component } from "react";
import './EditUser.css';
import axios from "axios";
import { withRouter } from 'react-router'
import {toast, ToastContainer} from "react-toastify";

class EditUser extends Component {
  state = {
    id: '',
    name: "",
    email: "",
    enrollnumber: "",
    response: ""
  };

  onChangeHandler = e => this.setState({ [e.target.name]: e.target.value });

  async componentDidMount() {
    try {
    let search =  this.props.location.search,
      id = search.substring(1, search.length);
    const updateUser = await axios(`/api/users/${id}`);
    const { name, email, enrollnumber } = updateUser.data.user;
    this.setState({ id, name, email, enrollnumber  });
    } catch (err) {
      this.setState({ response: "User not found!" })
    }
  };

  updateUserHandler = async (e) => {
    e.preventDefault();
    try {
      const user = await axios.put(`/api/users/${this.state.id}`, {
        name: this.refs.name.value,
        email: this.refs.email.value,
        enrollnumber: this.refs.enrollnumber.value
      });
      toast(user.data.message ,{ type: toast.TYPE.INFO, autoClose: 3000 });

    } catch (err) {
      toast(err.message ,{ type: toast.TYPE.ERROR, autoClose: 3000 });
    }
  };

  render() {
    if (this.state.response === "User not found!")
      return <h1>User not found!</h1>
    return (
      <div className="Edit-Student-Wrapper">
        <h1>Edit page</h1>
        <form onSubmit={this.updateUserHandler}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder="Name..."
            value={ this.state.name }
            name="name"
            onChange={this.onChangeHandler}
            ref="name"
            required
            className="Edit-Student-Input"
            id="name"
          />
          <label htmlFor="email">Email: <b>(must be a valid email)</b></label>
          <input
            type="email"
            placeholder="Enter your email here"
            value={ this.state.email }
            name="email"
            required
            onChange={this.onChangeHandler}
            ref="email"
            className="Edit-Student-Input"
            id="email"
          />
          <label htmlFor="enrollnumber">Enrollement Number: </label>
          <input
            type="number"
            placeholder="Enter the User's enrollment number"
            value={ this.state.enrollnumber }
            name="enrollnumber"
            min="1"
            max="120"
            required
            onChange={this.onChangeHandler}
            ref="enrollnumber"
            className="Edit-Student-Input"
            id="enrollnumber"
          />
          <button type="submit" className="Edit-Student-Submit fa fa-pencil"></button>
        </form>
        <ToastContainer />
      </div>
    );
  }
}

export default withRouter(EditUser);
