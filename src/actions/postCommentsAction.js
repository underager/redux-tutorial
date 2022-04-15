// CREATE REDUX ACTION TYPES
export const GET_POST_COMMENTS = 'GET_POST_COMMENTS';
export const GET_POST_COMMENTS_SUCCESS = 'GET_POST_COMMENTS_SUCCESS';
export const GET_POST_COMMENTS_FAILURE = 'GET_POST_COMMENTS_FAILURE';

// Create redux action creators that return an action
export const getPostComments = (postId) => ({
  type: GET_POST_COMMENTS,
  payload: postId,
});

export const getPostCommentsSuccess = (comments) => ({
  type: GET_POST_COMMENTS_SUCCESS,
  payload: comments,
});

export const getPostCommentsFailure = () => ({
  type: GET_POST_COMMENTS_FAILURE,
});

// Combine all the action creators in an asynchronous thunk
export function fetchComments(postId) {
  return async (dispatch) => {
    dispatch(getPostComments(postId));

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
      );
      const data = await response.json();

      dispatch(getPostCommentsSuccess(data));
    } catch (error) {
      dispatch(getPostCommentsFailure());
    }
  };
}
