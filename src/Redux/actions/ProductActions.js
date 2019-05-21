// Initial fetch call to the database -> import this function into the reducer file to run when page loads

export const fetchProducts = () => dispatch => {
    fetch('http://localhost:3005/api/v1/products')
    .then(res => res.json())
    .then(products => {
        dispatch({ type: "FETCH_PRODUCTS", payload: products})
    })
}

export const fetchProduct = (id) => dispatch => {
    fetch(`http://localhost:3005/api/v1/products/${id}`)
    .then(res => res.json())
    .then(product => {
        console.log(product)
        dispatch({ type: "FETCH_PRODUCT", payload: product})
    })
}