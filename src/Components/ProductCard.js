import React from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { deleteProduct } from '../Redux/actions/ProductActions'


class ProductCard extends React.Component {
    
    handleClick = (e) => {
        let id = this.props.product.id
        this.props.deleteProduct(id)
    }

    render(){
        return(
            <nav className="grid-item">
                {/* <span onClick={this.handleClick} className="product-delete" role="img" aria-label="x">❌</span> */}
                <p className="product-font">{this.props.product.name}</p>
                <br />
                <Link to={`/product/${this.props.product.id}`}>
                <img className="product-image" src={this.props.product.img_url} alt={this.props.product.name}/>
                </Link>
                <br/>
            </nav>
        )
    }
}

const stateToProps = state => {
    return {
        current: state.product
    };
};

export default connect(stateToProps, {deleteProduct} )(ProductCard);

