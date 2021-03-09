import jsonPlaceholder from "../apis/JsonPlaceholder";

export const fetchPosts = () => {
  return async (dispatch) => {
    const response = await jsonPlaceholder.get("/posts");

    dispatch({ type: "FETCH_POSTS", payload: response });
  };
};


// we return a function to make use of thunk to handle the async issues