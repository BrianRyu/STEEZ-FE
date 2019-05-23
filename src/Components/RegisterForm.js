import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { createUser } from '../Redux/actions/UserAction'

class RegisterForm extends Component {

  state = {
    username: '',
    password: '',
    passwordConfirmation: '',
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createUser(this.state)
    // include the fetch function here imported from action file
  }

  render() {
    return (
      <div className="register-div">
        <h3>RegisterPage</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Username: </label>
          <input name='username' value={this.state.username} onChange={this.handleChange} />
          <br/>
          <label>Password: </label>
          <input name='password' value={this.state.password} onChange={this.handleChange} />
          <br/>
          <label>Password Confirmation: </label>
          <input name='password' value={this.state.password} onChange={this.handleChange} />
          <br/>
          <input type="submit" />
        </form>
        Already have account? <Link to='login'>Login here</Link>
      </div>
    )
  }
}

export default connect(null, {createUser} )(RegisterForm);