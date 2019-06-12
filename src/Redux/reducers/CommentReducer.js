let initialState = {
    allComments: [],
    currentComment: {}
}

const commentReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_COMMENT":
            let newComment = action.payload
            let addedArray = [newComment, ...state.allComments]
            return {...state, allComments: addedArray}
        case "FETCH_COMMENTS":
            return {...state, allComments: action.payload};
    default:
        return state;
    }
}

export default commentReducer;