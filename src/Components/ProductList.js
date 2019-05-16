import React from "react";
import { connect } from "react-redux";
import ProductCard from "./ProductCard";

function ProductList(props) {
  const mapProducts = () => {
    let productsArray = Object.values(props.products);
    let productCards = productsArray.map(products => {
      return <ProductCard key={products.name} products={products} />;
    });
    return productCards;
  };

  return (
  <div className="gridcontainer">
    <h1> My Products </h1>
  {mapProducts()}
  </div>)
}

const stateToProps = state => {
  console.log(state);
  return {
    products: state.products
  };
};

export default connect(stateToProps)(ProductList);
