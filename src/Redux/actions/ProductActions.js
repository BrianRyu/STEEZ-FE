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
    .then(current => {
        dispatch({ type: "FETCH_PRODUCT", payload: current})
    })
}

export const addProduct = (newProductObj, localStorage) => dispatch => {
    fetch('http://localhost:3005/api/v1/products', {
        method: "POST",
        headers: {
            'Content-type': 'application/json',
            Accept: 'application/json',
            "Authorization": `BEARER ${localStorage.token}`
        },
        body: JSON.stringify(newProductObj)
    })
    .then(res => res.json())
    .then(product => {
        dispatch({ type: "ADD_PRODUCT", payload: product })
    })
}

export const deleteProduct = (id) => dispatch => {
    fetch(`http://localhost:3005/api/v1/products/${id}`, {
        method: "DELETE"
    })
    .then(res => res.json())
    .then(product => {
        dispatch({ type: "DELETE_PRODUCT", payload: product})
    })
}