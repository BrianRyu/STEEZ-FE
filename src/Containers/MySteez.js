import React from 'react'
import ProductList from '../Components/ProductList'

class MySteez extends React.Component {
    render() {
        return (
            <div>
                <h1 className="product-header"> My Products </h1>
                <button className="product-add-button" >Add To My Products</button>
                <ProductList />
                {/* SteezList will go here */}
            </div>
        )
    }
}

export default MySteez;