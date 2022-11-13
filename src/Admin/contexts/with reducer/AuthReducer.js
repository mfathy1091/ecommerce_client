const AuthReducer = (state, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        isloggedIn: true
      }
    case "GET_TOKEN":
      return {
        ...state,
        token: action.payload // get token from payload
      }
    case "GET_User":
      return {
        ...state,
        user: action.payload  // get token from payload
      }
    case "UPDATE_AVATAR":
      return {
        ...state,
        user: [{avatar: action.payload}]  // get avatar from payload and set it to the avart field in the user array
      }
    case "SIGN_OUT":
      return {
        ...state,
        loggedIn: false,
        token: "",  // remove token
        user: []    // remove user
    }
    default:
      return state;
  }
}

export default AuthReducer;