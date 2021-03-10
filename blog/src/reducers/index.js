import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
  posts: postsReducer,
  users: usersReducer,
});

// combineReducers accepts an object where the key names will become the keys in your root state object,
// and the values are the slice reducer functions that know how to update those slices of the Redux state.
