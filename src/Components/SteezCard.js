import React from 'react'
import { Link } from 'react-router-dom'

class SteezCard extends React.Component {
    render(){
        return(
            <div className="grid-item">
                <p className="product-font">{this.props.post.name}</p>
                <Link to={`/post/${this.props.post.id}`}>
                <img className="post-image" src={this.props.post.img_url} alt='' />
                </Link>
                <p className="product-font" >Likes: {this.props.post.likes}</p>
                <p className="product-font" >Views: {this.props.post.views}</p>
            </div>
        )
    }
}

export default SteezCard;