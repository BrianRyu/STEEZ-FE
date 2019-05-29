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
            return {...state, currentPost: {
                ...state.currentPost, likes: state.currentPost.likes + 1
                }
            }
        case "INCREASE_VIEW":
            return {...state, currentPost: {
                ...state.currentPost, views: state.currentPost.views + 1
            }
        }
        default:
            return state;
    }
}

export default mySteezReducer;

