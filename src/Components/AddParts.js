import React from "react";
import { connect } from "react-redux";

import { fetchProducts } from "../Redux/actions/ProductActions";

import PartCard from "./PartCard";

class AddParts extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    return (
      <div>
        <h1 className="product-header">Select Pieces To Add To Your Fit</h1>
        <ul className="part-grid-container">
          {this.props.products.map(product => (
            <PartCard part={product} />
          ))}
        </ul>
      </div>
    );
  }
}

const stateToProps = state => {
  return {
    products: state.products.allProducts
  };
};

export default connect(
  stateToProps,
  { fetchProducts }
)(AddParts);
