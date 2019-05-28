import React from "react";
import { connect } from "react-redux";
import ProductCard from "./ProductCard";
// action import

class SteezProducts extends React.Component {

    render (){
        return (
            <div>
                <ul className='grid-container'>
                    {this.props.post.products ? this.props.post.products.map(product => <ProductCard product={product}/>) : null}
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
