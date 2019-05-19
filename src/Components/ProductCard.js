import React from 'react'

function ProductCard(props) {
    console.log(props.products)
    return (
        <div className="grid-item">
            <p>{props.products.name}</p>
            <img className="product-image" src={props.products.img_url} alt='' />
        </div>
    )
}

export default ProductCard;