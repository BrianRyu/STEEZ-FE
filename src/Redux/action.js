

export function initialFetch() {
    return (dispatch) => {
        return fetch('http://localhost:3005/api/v1/parts')
        .then(r => r.json())
        .then(allParts => dispatch(allParts))
    }
}