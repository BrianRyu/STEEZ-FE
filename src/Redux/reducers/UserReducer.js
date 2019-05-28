const initialState = {
    users: [],
    currentUser: {}
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "LOGIN_USER":
            return {...state, currentUser: action.payload}
        case "CREATE_USER":
            let newUser = action.payload
            let addedArray = [...state.users, newUser]
            return {...state, users: addedArray, currentUser: newUser}
        case "LOGOUT_USER":
            return {...state, currentUser: {} }
        default:
            return state;
    }
}