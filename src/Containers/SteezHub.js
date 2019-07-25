import React from 'react'
import ProductList from '../Components/ProductList'
import TopFitList from '../Components/TopFitList'
import SteezFitList from '../Components/SteezFitList'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
 
class SteezHub extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1 className="product-header"> SteezFits Of The Week </h1>
                    <p className="top-product-font">Top 3 Highest Likes</p>
                    <TopFitList />
                    <br/><br/>
                    <h1 className="product-header"> All Products </h1>
                    <Link to="/add-product">
                    {this.props.currentUser !== null 
                    ? <button className="product-add-button">+</button> 
                    : null}
                    {/* route this button to view all products list */}
                    </Link>
                    <Link to="/all-products">
                    <button className="product-view-all">View All Products</button>
                    </Link>
                    <br/><br/><br/>
                    <ProductList />
                    <h1 className="product-header"> All SteezFits </h1>
                    {/* route this button to list of all SteezFits */}
                    <Link to="/all-fits">
                    <button className="steezfit-view-all">View All SteezFits</button>
                    </Link>
                    <br/><br/><br/>
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