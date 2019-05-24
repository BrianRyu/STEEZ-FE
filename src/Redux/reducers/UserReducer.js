const initialState = {
    users: [],
    currentUser: null
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "LOGIN_USER":
            return {...state, currentUser: action.payload}
        case "CREATE_USER":
            let newUser = action.payload 
            let addedArray = [...state.products, newUser]
            return {...state, users: addedArray} && {...state, currentUser: newUser}
        default:
            return state;
    }
}