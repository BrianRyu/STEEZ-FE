let initialState = {
    users: []
}

const mySteezReducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCH_USERS":
            return {...state, users: action.type}

        default:
            return state;
    }
}

export default mySteezReducer;