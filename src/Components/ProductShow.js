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
            <div>
                <h1>PRODUCT SHOW</h1>
                <p></p>
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