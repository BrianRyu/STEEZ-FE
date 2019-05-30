import React from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { increaseView } from '../Redux/actions/MySteezActions'

class SteezCard extends React.Component {

    handleClick = () => {
        this.props.increaseView(this.props.postrr)
    }

    render(){
        return(
            <div className="grid-item">
                <p className="product-font">{this.props.post.name}</p>
                <Link to={`/post/${this.props.post.id}`}>
                <img onClick={this.handleClick} className="product-image" src={this.props.post.img_url} alt='' />
                </Link>
                <p className="product-font" >Likes: {this.props.post.likes}</p>
                <p className="product-font" >Views: {this.props.post.views}</p>
            </div>
        )
    }
}

const stateToProps = state => {
    return {
        postrr: state.posts.currentPost
    }
}

export default connect(stateToProps, {increaseView})(SteezCard);