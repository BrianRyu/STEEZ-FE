// home view is essentially a container that holds NavBar and SteezContainer
import React from 'react'
import SteezContainer from './SteezContainer'
import { Link } from 'react-router-dom'

class Home extends React.Component {
    render(){
        return (
            <div>
                <br /><br/><br/><br/><br /><br/><br/><br/>
                <Link to="/mysteez">
                <img src="../mysteez.jpg" alt="MY.STEEZ" className="home-banner" />
                </Link>
                <br /><br/><br/><br/>
                <Link to="/steezhub" >
                <img src="" alt="STEEZ.HUB" className="home-banner" />
                </Link>
            </div>
        )
    }
}
        

export default Home;