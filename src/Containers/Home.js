// home view is essentially a container that holds NavBar and SteezContainer
import React from 'react'
import SteezContainer from './SteezContainer'

class Home extends React.Component {
    render(){
        return (
            <div>
                <SteezContainer />
            </div>
        )
    }
}
        

export default Home;