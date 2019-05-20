import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard(props) {
    console.log(props)
    return (
        <nav className="grid-item">
            <button className="product-x-button">
            <span role="img">❌</span></button>
            <p className="product-font">{props.product.name}</p>
            <br />
            <Link to={`/parts/product/${props.product.name}`}>
            <img className="product-image" src={props.product.img_url} alt='' />
            </Link>
            <br/>
            <button className="add-to-fit-button">Add To My.Fit</button>
        </nav>
    )
}

export default ProductCard;