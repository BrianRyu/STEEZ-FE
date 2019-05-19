import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'

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
      console.log(e)
    e.preventDefault();
    let userLoginObj = this.state;
  };

  render() {
    return (
      <div>
        <h3>Please Login</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input type="text" name="username" value='' onChange={this.handleChange}/>
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value=''
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" />
          Don't have account? <Link to='register'>Register here</Link>
        </form>
      </div>
    );
  }
}

export default connect()(LoginForm);
