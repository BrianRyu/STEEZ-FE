// home view is essentially a container that holds NavBar and SteezContainer
import React from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'

class Home extends React.Component {
    render(){
        return (
            <div>
                <br /><br/><br/><br/>
                {this.props.currentUser === null ?
                <Link to="/login">
                <img src={require("../Photos/mysteez.jpg")} alt="MY.STEEZ" className="home-banner" />
                </Link>
                :
                <Link to="/mysteez">
                <img src={require("../Photos/mysteez.jpg")} alt="MY.STEEZ" className="home-banner" />
                </Link>
                }
                <Link to="/steezhub" >
                <img src={require("../Photos/steezhub.jpg")} alt="STEEZ.HUB" className="home-banner" />
                </Link>
            </div>
        )
    }
}
        
const stateToProps = (state) => {
    return {
        currentUser: state.users.currentUser
    }
}

export default connect(stateToProps)(Home);