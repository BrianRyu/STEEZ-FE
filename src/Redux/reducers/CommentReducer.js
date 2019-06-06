let initialState = {
    allComments: [],
    currentComment: {}
}

const commentReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_COMMENT":
            let newComment = action.payload
            let addedArray = [...state.allComments, newComment]
            return {...state, allComments: addedArray}
    default:
        return state;
    }
}

export default commentReducer;