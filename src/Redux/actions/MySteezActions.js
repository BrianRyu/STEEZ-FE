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

export const addPost = (postObj, id, localStorage) => dispatch => {
    fetch('http://localhost:3005/api/v1/posts', {
        method: "POST",
        headers: {
            'Content-type': 'application/json',
            Accept: 'application/json',
            "Authorization": `BEARER ${localStorage.token}`
        },
        body: JSON.stringify({
            name: postObj.name,
            img_url: postObj.img_url,
            user_id: id,
            likes: 0,
            views: 0
        })
    })
    .then(res => res.json())
    .then(post => {
        dispatch({ type: "ADD_POST", payload: post })
    })
}

export const getPieces = () => dispatch => {
    fetch('http://localhost:3005/api/v1/parts')
    .then(res => res.json())
    .then(pieces => {
        dispatch({type: "GET_PIECES", payload: pieces})
    })
}

export const getPiece = (id) => dispatch => {
    fetch(`http://localhost:3005/api/v1/parts/${id}`)
    .then(res => res.json())
    .then(current => {
        dispatch({ type: "GET_PIECE", payload: current})
    })
}

export const addPiece = (pieceId, postId, localStorage) => dispatch => {
    fetch(`http://localhost:3005/api/v1/parts`,{
    method: "POST",
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        "Authorization": `BEARER ${localStorage.token}`
        },
        body: JSON.stringify({
            post_id: postId,
            product_id: pieceId
        })
    })
    .then(res => res.json())
    .then(piece => {
        dispatch({ type: "ADD_PIECE", payload: piece})
    })
}    

export const deletePiece = (id) => dispatch => {
    fetch(`http://localhost:3005/api/v1/parts/${id}`, {
        method: "DELETE"
    })
    .then(res => res.json())
    .then(piece => {
        dispatch({ type: "DELETE_PIECE", payload: piece })
    })
}