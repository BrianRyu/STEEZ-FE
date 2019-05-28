export const fetchPost = (id) => dispatch => {
    fetch(`http://localhost:3005/api/v1/posts/${id}`)
    .then(res => res.json())
    .then(current => {
        dispatch({ type: "FETCH_POST", payload: current})
    })
}
