export const fetchProducts = () => dispatch => {
    fetch('http://localhost:3005/api/v1/users')
    .then(res => res.json())
    .then(userPosts => {
        console.log(userPosts)
}