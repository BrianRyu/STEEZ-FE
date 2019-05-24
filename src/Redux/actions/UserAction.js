export const setCurrentUser = (userObj) => {
    return {type: "CREATE_USER", payload: userObj}
}

export const loginUser = userObj => ({
    type: "LOGIN_USER", payload: userObj
})

export const getProfileFetch = () => {
    return dispatch => {
        const token = localStorage.token;
        if(token) {
            return fetch("http://localhost:3005/api/v1/profile", {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        }
    }
}