import React from 'react'
import { connect } from 'react-redux'
import { addComment } from '../Redux/actions/CommentAction'

class Comments extends React.Component {

    state = {
        comment: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let comment = this.state.comment
        let user_id = this.props.currentUser.id
        let post_id = this.props.currentPost.id
        if(this.state.comment !== "" && this.state.comment !== null){
            console.log(this.state)
            this.props.addComment(comment, user_id, post_id, localStorage)
        }
    }

    render() {
        return (
            <div className="product-form-div">
                <form onSubmit={this.handleSubmit} className="product-form">
                    <label>Comment: </label>
                    <input type="text" name="comment" value={this.state.name} onChange={this.handleChange}/>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

const stateToProps = state => {
    return {
        currentUser: state.users.currentUser,
        currentPost: state.posts.currentPost
    }
}

export default connect(stateToProps, {addComment})(Comments);