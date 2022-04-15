//CREATE REDUX ACTION TYPE
export const GET_POST = 'GET_POST';
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
export const GET_POST_FAILURE = 'GET_POST_FAILURE';

// Create redux action creators that return an action.
export const getPost = (id) => ({
  type: GET_POST,
  payload: id,
});

export const getPostSuccess = (post) => ({
  type: GET_POST_SUCCESS,
  payload: post,
});

export const getPostFailure = () => ({
  type: GET_POST_FAILURE,
});

// Combine all the action creators in an asynchronous thunk.
export function fetchPost(id) {
  return async (dispatch) => {
    // console.log('dispatching getPost');
    dispatch(getPost(id));

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const data = await response.json();
      // console.log(data);
      // console.log('dispatching getPostSuccess');
      dispatch(getPostSuccess(data));
    } catch (error) {
      dispatch(getPostFailure());
    }
  };
}
