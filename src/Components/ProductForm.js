import React from 'react'
import { connect } from 'react-redux'

import { addProduct } from '../Redux/actions/ProductActions'
import { withRouter } from 'react-router-dom'
class ProductForm extends React.Component {

    state = {
        name: "",
        img_url: "",
        description: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let newProductObj = this.state
        this.props.addProduct(newProductObj, localStorage)
        console.log(localStorage)
        this.props.history.push('/steezhub')
    }
    render(){
        return(
            <div className="product-form-div">
            <h1>Add Your Product Here </h1>
                <form onSubmit={this.handleSubmit} className="product-form">
                    <label>Product Name: </label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                    <br /> <br />
                    <label>Product Image URL: </label>
                    <input type="url" name="img_url" value={this.state.img_url} onChange={this.handleChange} />
                    <br /> <br />
                    <label>Product Description: </label>
                    <input type="textbox" name="description" placeholder="Include any detail of product here." value={this.state.description} onChange={this.handleChange} />
                    <br /> <br />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}



export default connect(null, {addProduct})(withRouter(ProductForm));