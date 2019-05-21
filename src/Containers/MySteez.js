import React from 'react'
import ProductList from '../Components/ProductList'

import { Link } from 'react-router-dom'

class MySteez extends React.Component {
    render() {
        return (
            <div>
                <h1 className="product-header"> My Products </h1>
                <Link to="/add-product">
                <button className="product-add-button" >Add To My Products</button>
                </Link>
                <ProductList />
                {/* SteezList will go here */}
            </div>
        )
    }
}

export default MySteez;