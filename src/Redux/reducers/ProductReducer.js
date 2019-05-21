
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
        default: 
            return state;
    }
}

export default productReducer;
