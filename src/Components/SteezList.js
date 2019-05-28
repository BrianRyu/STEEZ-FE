import React from 'react'
import SteezCard from './SteezCard'

import { connect } from 'react-redux'

class SteezList extends React.Component {

    render(){
        return (
            <div>
                <ul>
                    {this.props.posts.map(post => <SteezCard post={post}/>)}
                </ul>
            </div>
        )
    }
}

const stateToProps = (state) => ({
    posts: state.users.currentUser.posts
})

export default connect(stateToProps)(SteezList);