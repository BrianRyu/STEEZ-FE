import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'

import {getProfileFetch} from '../Redux/actions/UserAction'

class LoginForm extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    fetch("http://localhost:3005/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then((data) => {
      if(data.error){
        alert(data.error)
      } else {
        localStorage.setItem("token", data.jwt)
        this.props.getProfileFetch()
        this.props.history.push('/home')
      }
    })
  };

  render() {
    return (
      <div className="login-div">
        <h3>Please Login</h3>
        <form onSubmit={this.handleSubmit} className="login-form">
          <label>
            Username:
            <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
          </label> <br/>
          <label>
            Password:
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
          </label> <br/>
          <input className="login-submit" type="submit" /> <br/>
          Don't have account? <Link to='register'>Register here</Link>
        </form>
      </div>
    );
  }
}

export default connect(null, {getProfileFetch})(LoginForm);
