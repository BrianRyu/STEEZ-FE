import React from 'react'

function ProductCard(props) {
    console.log(props.products)
    return (
        <a className="grid-item" href=''>
            <p className="product-font">{props.products.name}</p>
            <br />
            <img className="product-image" src={props.products.img_url} alt='' />
            <br/>
            <button>Add To My.Fit</button>
        </a>
    )
}

export default ProductCard;