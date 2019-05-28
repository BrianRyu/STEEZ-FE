
let initialState = {
        allProducts: [],
        current: {}
}

const productReducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCH_PRODUCTS":
            return {...state, allProducts: action.payload};
        case "FETCH_PRODUCT":
            return {...state, current: action.payload};
        case "ADD_PRODUCT":
            let newProduct = action.payload 
            let addedArray = [...state.allProducts, newProduct]
            return {...state, allProducts: addedArray}
        case "DELETE_PRODUCT":
            let id = action.payload.id
            let filteredArray = state.allProducts.filter(product => product.id !== id)
            return {...state, allProducts: filteredArray}
        default: 
            return state;
    }
}

export default productReducer;
