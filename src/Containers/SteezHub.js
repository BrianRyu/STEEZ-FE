import React from 'react'
import ProductList from '../Components/ProductList'
import { Link } from 'react-router-dom'

class SteezHub extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1 className="product-header"> Products </h1>
                    <Link to="/add-product">
                    <button className="product-add-button" >Add To Products</button>
                    </Link>
                    <ProductList />
                </div>
            </div>
        )
    }
}

export default SteezHub;