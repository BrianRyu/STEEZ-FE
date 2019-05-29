import React from 'react'
import SteezCard from './SteezCard'

import { connect } from 'react-redux'

class SteezList extends React.Component {

    render(){
        return (

            <div>
                <ul className="grid-container">
                    {this.props.posts ? this.props.posts.map(post => <SteezCard post={post}/>) 
                    : <p>Please Post More Fits!</p> }
                </ul>
            </div>
        )
    }
}

const stateToProps = (state) => {
    return {
        posts: state.users.currentUser.posts
    }
}

export default connect(stateToProps)(SteezList);