import jsonPlaceholder from "../apis/JsonPlaceholder";
import _ from "lodash";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  const userIds = _.uniq(_.map(getState().posts, "userId"));
  userIds.forEach((id) => dispatch(fetchUser(id)));


};

export const fetchPosts = () => {
  return async (dispatch) => {
    const response = await jsonPlaceholder.get("/posts");

    dispatch({ type: "FETCH_POSTS", payload: response.data });
  };
};

export const fetchUser = (id) => {
  return (dispatch) => {
    _fetchUser(id, dispatch);
  };
};
// we return a function to make use of thunk to handle the async issues

const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
});

// underscore + function name => private function

// _.memoize => check lodash.com

// Memoisation oder Memoisierung ist eine Technik, um Computerprogramme zu beschleunigen,
// indem Rückgabewerte von Funktionen zwischengespeichert anstatt neu berechnet werden.
