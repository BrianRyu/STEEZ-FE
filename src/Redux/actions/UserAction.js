
export const userPostFetch = (user) => {
  return dispatch => {
      return fetch("http://localhost:3005/api/v1/users", {
          method: "POST",
          headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json'
          },
          body: JSON.stringify({user})
      })
      .then(res => res.json())
      .then(data => {
          if(data.message){
              return data.message
          } else {
              localStorage.setItem("token", data.jwt)
              dispatch(loginUser(data.user))
          }
      })
  }
}

export const loginUser = userObj => ({
    type: "LOGIN_USER", payload: userObj})

const saveUserToState = (userObj) => {
return {type: "SAVE_USER_TO_STATE", payload: userObj}
}

const saveTokenToState = (token) => {
return {type: "SAVE_TOKEN_TO_STATE", payload: token}
}