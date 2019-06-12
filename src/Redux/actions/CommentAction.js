export const addComment = (comment, user_id, post_id, localStorage) => dispatch => {
    fetch('http://localhost:3005/api/v1/comments', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Authorization': `BEARER ${localStorage.token}`
        },
        body: JSON.stringify({
            comment: comment,
            user_id: user_id,
            post_id: post_id
        })
    })
    .then(res => res.json())
    .then(commentObj => {
        dispatch({ type: "ADD_COMMENT", payload: commentObj})
    })
} 


export const fetchComments = () => dispatch => {
    fetch('http://localhost:3005/api/v1/comments')
    .then(res => res.json())
    .then(comments => {
        dispatch({ type: "FETCH_COMMENTS", payload: comments})
    })
}