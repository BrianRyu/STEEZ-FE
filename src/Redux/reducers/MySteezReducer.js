let initialState = {
    currentPost: {}
}

const mySteezReducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCH_POST":
            return {...state, currentPost: action.payload}
        default:
            return state;
    }
}

export default mySteezReducer;