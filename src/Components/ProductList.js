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
    <div>
      <h1 className="product-header"> My Products </h1>
      <ul className='grid-container'>
      {mapProducts()}
      </ul>
    </div>)
}

const stateToProps = state => {
  console.log(state);
  return {
    products: state.products
  };
};

export default connect(stateToProps)(ProductList);
