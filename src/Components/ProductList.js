import React from "react";
import { connect } from "react-redux";
import ProductCard from "./ProductCard";

// action import
import {fetchParts} from '../Redux/actions/ProductActions'

class ProductList extends React.Component {

  componentDidMount() {
    this.props.fetchParts()
  }

    render (){
        return (
            <div>
                <h1 className="product-header"> My Products </h1>
                <button className="product-add-button" >Add To My Products</button>
                <ul className='grid-container'>
                  {this.props.parts.map(part => <ProductCard product={part.product} />)}
                </ul>
            </div>
        )
    }
}

const stateToProps = state => {
    return {
        parts: state.parts
    };
};

export default connect(stateToProps, {fetchParts} )(ProductList);
