import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { createUser, loginUser } from '../Redux/actions/UserAction'

class RegisterForm extends Component {

  state = {
    username: '',
    password: '',
    confirmation: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if(this.state.password === this.state.confirmation){

      fetch("http://localhost:3005/api/v1/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accepts": "application/json",
        },
        body: JSON.stringify(this.state)
      })
      .then(res => res.json())
      .then((data) => {
        console.log(data)
        if (data.error){
          alert(data.error)
        } else {
          localStorage.setItem("token", data.jwt)
          this.props.createUser(data)
          loginUser(data.user)
          this.props.history.push('/home')
        }
      })
		} else {
			alert("Passwords don't match!")
		}
  }


  render() {
    return (
      <div className="register-div">
        <h3>Register</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Username: </label>
          <input name='username' value={this.state.username} onChange={this.handleChange} />
          <br/><br />
          <label>Password: </label>
          <input name='password' value={this.state.password} onChange={this.handleChange} />
          <br/><br/>
          <label>Password Confirmation: </label>
          <input name='confirmation' value={this.state.confirmation} onChange={this.handleChange} />
          <input className="register-submit" type="submit" />
        </form><br/>
        Already have account? <Link to='login'>Login here</Link>
      </div>
    )
  }
}

export default connect(null, {createUser, loginUser} )(RegisterForm);