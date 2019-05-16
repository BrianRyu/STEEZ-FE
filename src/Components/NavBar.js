import React from 'react'

class NavBar extends React.Component {
    render() {
        return (
            <nav className='navbar'>
                <div>
                    <br/>
                    <a className="mainlogo">STEEZ.</a>
                    <a className="navlink" name="MY STEEZ." href="/mysteez">MY STEEZ.</a>
                    <a className="navlink" name="STEEZ.HUB" href="/steezhub">STEEZ.HUB</a>
                </div>
            </nav>
        )
    }
}

export default NavBar;