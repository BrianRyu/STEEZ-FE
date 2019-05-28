import React from 'react'
import SteezList from '../Components/SteezList'
import MyProducts from '../Components/MyProducts'


class MySteez extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1 className="product-header"> My Fits</h1>
                    <button className="product-add-button">+</button>
                    <SteezList />
                    <h1 className="product-header">My Products</h1>
                    <button className="product-add-button">+</button>
                    <MyProducts />
                </div>
            </div>
        )
    }
}

export default MySteez;