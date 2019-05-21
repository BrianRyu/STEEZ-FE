
let initialState = {
        products: [],
        current: {}
}

const productReducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCH_PRODUCTS":
            return {...state, products: action.payload};
        case "FETCH_PRODUCT":
            return {...state, current: action.payload};
        case "ADD_PRODUCT":
            let newProduct = action.payload 
            let addedArray = [ newProduct ,...state.products]
            console.log(newProduct)
            return {...state, products: addedArray}
        case "DELETE_PRODUCT":
            let id = action.payload
            let filteredArray = state.products.filter(product => product.id !== id)
            return {...state, products: filteredArray}
        default: 
            return state;
    }
}

export default productReducer;
