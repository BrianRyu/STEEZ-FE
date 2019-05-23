export const setCurrentUser = (userObj) => {
    console.log("ACTION", userObj)
    return {type: "CREATE_USER", payload: userObj}
}

export const loginUser = userObj => ({
    type: "LOGIN_USER", payload: userObj
})

const saveUserToState = (userObj) => {
return {type: "SAVE_USER_TO_STATE", payload: userObj}
}

const saveTokenToState = (token) => {
return {type: "SAVE_TOKEN_TO_STATE", payload: token}
}