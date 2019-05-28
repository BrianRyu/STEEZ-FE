export const fetchUsers = () => dispatch => {
    fetch('http://localhost:3005/api/v1/users')
    .then(res => res.json())
    .then(userPosts => {
        dispatch({ type: "FETCH_USERS", payload: userPosts})
    })
}

