import React from 'react'
import ProductList from '../Components/ProductList'
import SteezFitList from '../Components/SteezFitList'

class SteezHub extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1 className="product-header"> Products </h1>
                    <ProductList />
                    <h1 className="product-header"> Steez Fits </h1>
                    <SteezFitList />
                </div>
            </div>
        )
    }
}

export default SteezHub;