import React from 'react'
import { fetchProduct } from '../Redux/actions/ProductActions'
import { connect } from 'react-redux'

class ProductShow extends React.Component {

componentDidMount(){
    let id = this.props.match.params.id
    this.props.fetchProduct(id)
}

    render() {
        return (
            <div className="product-show">
                <h1>{this.props.product.name}</h1>
                <br/>
                <img className="show-img" src={this.props.product.img_url} alt=""/>
                <p className="show-desc">{this.props.product.description}</p>
            </div>
        )
    }
}

const stateToProps = (state) => {
    return {
        product: state.current
    }
}

export default connect(stateToProps, {fetchProduct}) (ProductShow)