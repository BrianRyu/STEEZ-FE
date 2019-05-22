import React from 'react'
import ProductList from '../Components/ProductList'
import SteezList from '../Components/SteezList'

import { Link } from 'react-router-dom'

class MySteez extends React.Component {
    render() {
        return (
            <div>      
                <div>
                    <h1 className="product-header"> My Products </h1>
                    <Link to="/add-product">
                    <button className="product-add-button" >Add To My Products</button>
                    </Link>
                    <ProductList />
                </div>
                <div>
                    <h1 className="product-header"> My Fits</h1>
                    <button className="product-add-button" >+</button>
                    <SteezList />
                </div>
            </div>
        )
    }
}

export default MySteez;