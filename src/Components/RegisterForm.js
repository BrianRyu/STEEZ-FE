import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from '../Redux/actions/UserAction'

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
      .then((response) => {
        console.log(response)
        if (response.errors){
          alert(response.errors)
        } else {
          this.props.setCurrentUser(response)
        }
      })
		} else {
			alert("Passwords don't match!")
		}
  }

  
  setCurrentUser = (response) => {
    this.setState({
        currentUser: response.user
    }, () => {
        localStorage.setItem("token", response.token)
        this.props.history.push(`/profile`)
    })
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
          <input name='confirmation' value={this.state.confirmation} onChange={this.handleChange} />
          <br/>
          <input type="submit" />
        </form>
        Already have account? <Link to='login'>Login here</Link>
      </div>
    )
  }
}

export default connect(null, {setCurrentUser} )(RegisterForm);