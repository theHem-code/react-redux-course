// Reducers always get called with the 2 arguments. The current state and the action

// switch statement works the same way like the if statement and is much more common in this case. 
// the switch (expression) will be compared with the case value
export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    default:
      return state;
  }
};
