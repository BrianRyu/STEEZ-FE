import React from 'react'

function ProductCard(props) {
    return (
        <nav className="grid-item">
            <p className="product-font">{props.product.name}</p>
            <br />
            <img className="product-image" src={props.product.img_url} alt='' />
            <br/>
            <button>Add To My.Fit</button>
        </nav>
    )
}

export default ProductCard;