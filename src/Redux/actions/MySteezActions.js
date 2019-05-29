export const fetchPost = (id) => dispatch => {
    fetch(`http://localhost:3005/api/v1/posts/${id}`)
    .then(res => res.json())
    .then(current => {
        dispatch({ type: "FETCH_POST", payload: current})
    })
}

export const fetchPosts = () => dispatch => {
    fetch('http://localhost:3005/api/v1/posts')
    .then(res => res.json())
    .then(posts => {
        dispatch({type: "FETCH_POSTS", payload: posts})
    })
}

export const increaseView = (postObj) => dispatch => {
    fetch(`http://localhost:3005/api/v1/posts/${postObj.id}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({
            views: postObj.views + 1
        })
    })
    .then(res => res.json())
    .then(post => {
        dispatch({ type: "INCREASE_VIEW", payload: post })
    })
}


export const increaseLike = (postObj) => dispatch => {
    fetch(`http://localhost:3005/api/v1/posts/${postObj.id}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({
            likes: postObj.likes + 1
        })
    })
    .then(res => res.json())
    .then(post => {
        dispatch({ type: "INCREASE_LIKE", payload: post })
    })
}