// Initial fetch call to the database -> import this function into the reducer file to run when page loads

export const fetchParts = () => dispatch => {
        fetch('http://localhost:3005/api/v1/parts')
        .then(res => res.json())
        .then(parts => {
            dispatch({ type: "FETCH_PARTS", payload: parts})})
    }


// export const savePartsToState = (parts) => {
//     return {type: "SAVE_PARTS_TO_STATE", payload: parts}
// }