import React from 'react'
import { connect } from 'react-redux'
import { logoutUser } from '../Redux/actions/UserAction'

class NavBar extends React.Component {

    handleClick = e => {
        e.preventDefault()
        localStorage.removeItem("token")
        this.props.logoutUser()
        window.location.href = "http://localhost:3000/login"
    }

    handleOut = e => {
        window.location.href = "http://localhost:3000/register"
    }

    handleIn = e => {
        window.location.href = "http://localhost:3000/login"
    }

    render() {
        return (
            <nav className='navbar'>
                <div>
                    <br/>
                    <a className="mainlogo navlink"name="STEEZ." href="/home">STEEZ.</a>
                    <div>
                        <button type="button" className="navlink" name="Register" onClick={this.handleOut}>REGISTER</button>
                        {this.props.currentUser.username 
                        ? <button onClick={this.handleClick} className="navlink" name="Logout">LOGOUT</button>
                        : <button className="navlink" name="Login" onClick={this.handleIn}>LOGIN</button>}
                    </div>
                </div>
            </nav>
        )
    }
}

const stateToProps = state => ({
    currentUser: state.users.currentUser
})

export default connect(stateToProps, {logoutUser}) (NavBar);