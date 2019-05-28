import React from 'react'
import ProductList from '../Components/ProductList'

class SteezHub extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1 className="product-header"> Products </h1>
                    <ProductList />
                </div>
            </div>
        )
    }
}

export default SteezHub;