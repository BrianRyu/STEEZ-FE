import React from "react";
import { connect } from "react-redux";
import ProductCard from "./ProductCard";

// action import
import {fetchProducts} from '../Redux/actions/ProductActions'

class ProductList extends React.Component {

  componentDidMount() {
    console.log(this.props)
    this.props.fetchProducts()
  }

    render (){
        return (
            <div>
                <h1 className="product-header"> My Products </h1>
                <button className="product-add-button" >Add To My Products</button>
                <ul className='grid-container'>
                  {this.props.products.map(product => <ProductCard product={product} />)}
                </ul>
            </div>
        )
    }
}

const stateToProps = state => {
  console.log(state)
    return {
        products: state.products
    };
};

export default connect(stateToProps, {fetchProducts} )(ProductList);
