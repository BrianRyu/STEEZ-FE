let initialState = {
    posts: []
}

const mySteezReducer = (state = initialState, action) => {
    switch(action.type) {
        case "":
            return {}
        default:
            return state;
    }
}

export default mySteezReducer;