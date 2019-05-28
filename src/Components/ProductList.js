import React from "react";
import { connect } from "react-redux";
import ProductCard from "./ProductCard";

// action import
import {fetchProducts} from '../Redux/actions/ProductActions'

class ProductList extends React.Component {

  componentDidMount() {
    this.props.fetchProducts()
  }

    render (){
        return (
            <div>
                <ul className='grid-container'>
                  {this.props.products.map(product => <ProductCard product={product} />)}
                </ul>
            </div>
        )
    }
}

const stateToProps = state => {
    return {
        products: state.products.allProducts,
        user: state.users.currentUser
    };
};

export default connect(stateToProps, {fetchProducts} )(ProductList);
