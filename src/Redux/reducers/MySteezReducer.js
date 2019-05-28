let initialState = {
    allPosts: [],
    currentPost: {}
}

const mySteezReducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCH_POST":
            return {...state, currentPost: action.payload}
        case "FETCH_POSTS":
            return {...state, allPosts: action.payload}
        default:
            return state;
    }
}

export default mySteezReducer;