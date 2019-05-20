import React from 'react'

class NavBar extends React.Component {
    render() {
        return (
            <nav className='navbar'>
                <div>
                    <br/>
                    <a className="mainlogo navlink"name="STEEZ." href="/mysteez">STEEZ.</a>
                    <a className="navlink" name="Login" href="/login">LOGIN</a>
                    <a className="navlink" name="Register" href="/register">REGISTER</a>
                </div>
            </nav>
        )
    }
}

export default NavBar;