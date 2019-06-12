import React from 'react'
import { connect } from 'react-redux'
import { fetchComments } from '../Redux/actions/CommentAction'

class CommentShow extends React.Component {

    componentDidMount() {
        this.props.fetchComments()
    }

    render() {
        return (
            <div>
               <ul>
                   {this.props.comments.allComments.map(comment => comment.post_id === this.props.currentPost.id ? <li>{comment.comment}</li> : null)}
               </ul>
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

export default connect(stateToProps, { fetchComments } )(CommentShow);