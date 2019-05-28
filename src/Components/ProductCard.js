import React from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
// import {fetchProduct} from '../Redux/actions/ProductActions'
import { deleteProduct } from '../Redux/actions/ProductActions'


class ProductCard extends React.Component {

    // componentDidMount(){
    //     let id = parseInt(this.props.product.id)
    //     this.props.fetchProduct(id)
    // }
    
    handleClick = (e) => {
        let id = this.props.product.id
        this.props.deleteProduct(id)
    }

    render(){
        return(
            <nav className="grid-item">
                <span onClick={this.handleClick} className="product-delete" role="img" aria-label="x">❌</span>
                <p className="product-font">{this.props.product.name}</p>
                <br />
                <Link to={`/product/${this.props.product.id}`}>
                <img className="product-image" src={this.props.product.img_url} alt='' />
                </Link>
                <br/>
                {/* <button className="add-to-fit-button">Add To My.Fit</button> */}
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

