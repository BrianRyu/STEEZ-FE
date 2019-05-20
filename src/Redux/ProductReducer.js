let initialState = {
    products: []
}

const productReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SAVE_PRODUCT_TO_STATE":
            return {...state, products: action.payload};
        default: 
            return state;
    }
}


export default productReducer;
