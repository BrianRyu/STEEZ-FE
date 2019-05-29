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
        case "INCREASE_LIKE":
        console.log(state.allPosts)
        console.log(state.currentPost)
            // return {...state, currentPost: {
            //     ...state.currentPost, likes: state.currentPost.likes + 1
            //     }
            // }
        default:
            return state;
    }
}

export default mySteezReducer;

