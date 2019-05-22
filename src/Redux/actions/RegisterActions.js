export const userPostFetch = (user, push) => {
    return dispatch => {
        return fetch("http://localhost:3005/api/v1/users", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({user})
        })
        .then(res => res.json())
        .then(data => {
            if(data.message){
                push("/register")
                return "YOU SHALL NOT PASS!"
            } else {
                localStorage.setItem("token", data.jwt)
                dispatch(loginUser(data.user))
            }
        })
    }
}

const loginUser = userObj => ({
    type: "LOGIN_USER",
    payload: userObj
})