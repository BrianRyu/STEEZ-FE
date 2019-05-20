import React from "react";
import { connect } from "react-redux";
import ProductCard from "./ProductCard";

// action import
import {fetchParts} from '../Redux/actions/ProductActions'

class ProductList extends React.Component {

  componentDidMount() {
    this.props.fetchParts()
  }
    
  // productList(props) {
  //   console.log(props)
  //     const mapParts = (props) => {
  //         let partsArray = Object.values(props.parts)
  //         let partsCards = partsArray.map(parts => {
  //             return <ProductCard key={parts.name} parts={parts} />
  //         })
  //         return partsCards;
  //     }
  // }

    render (){
        return (
            <div>
                <h1 className="product-header"> My Products </h1>
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
