
let initialState = {
        parts: []
}

const productReducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCH_PARTS":
            return {...state, parts: action.payload};
        default: 
            return state;
    }
}

export default productReducer;
