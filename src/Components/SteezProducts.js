import React from "react";
import { connect } from "react-redux";

import FitCard from './FitCard'
// action import

class SteezProducts extends React.Component {

    render (){
        return (
            <div>
                <ul className="grid-container">
                    {this.props.post.products ? this.props.post.products.map(product => <FitCard product={product}/>) : null}
                </ul>
            </div>
        )
    }
}

const stateToProps = state => {
    return {
        post: state.posts.currentPost
    }
}

export default connect(stateToProps)(SteezProducts);
