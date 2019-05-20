
export const fetchProducts = () => {
    return (dispatch) => {
      fetch("http://localhost:3000/api/v1/products")
      .then(res => res.json())
      .then(snacks => dispatch(saveSnacksToState(snacks)))
    }
  }

export function initialFetch() {
    return (dispatch) => {
        return fetch('http://localhost:3005/api/v1/parts')
        .then(r => r.json())
        .then(allParts => dispatch(allParts))
    }
}