import React from 'react'
import ProductList from '../Components/ProductList'
import SteezFitList from '../Components/SteezFitList'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class SteezHub extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1 className="product-header"> All Products </h1>
                    <Link to="/add-product">
                    {this.props.currentUser !== null 
                    ? <button className="product-add-button">+</button> 
                    : null}
                    </Link>
                    <ProductList />
                    <h1 className="product-header"> Steez Fits </h1>
                    <SteezFitList />
                </div>
            </div>
        )
    }
}

const stateToProps = state => {
    return {
        currentUser: state.users.currentUser
    }
}

export default connect(stateToProps)(SteezHub);