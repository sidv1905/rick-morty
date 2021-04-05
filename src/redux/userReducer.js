var logger;
function userReducer(state = { user: {}, loggedIn: false }, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        user: action.payload,
        loggedIn: true,
      };
    case "LOGOUT":
      return {
        user: {},
        loggedIn: false,
      };
    default:
      if (localStorage.getItem("user") !== null) {
        logger = true;
      }
      return {
        user: JSON.parse(localStorage.getItem("user")),
        loggedIn: logger,
      };
  }
}

export default userReducer;
