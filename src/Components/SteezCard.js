import React from 'react'

class SteezCard extends React.Component {
    render(){
        return(
            <div>
                <p className="product-font">{this.props.post.name}</p>
            </div>
        )
    }
}

export default SteezCard;