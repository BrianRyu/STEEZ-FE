import React from 'react'
import { connect } from 'react-redux'

class CommentShow extends React.Component {

    render() {
        return (
            <div>
               SHOW
            </div>
        )
    }
}

const stateToProps = state => {
    return {
        currentPost: state.posts.currentPost,
        comments: state.comments
    }
}

export default connect(stateToProps)(CommentShow);