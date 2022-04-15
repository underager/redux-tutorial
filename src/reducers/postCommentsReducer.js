import * as actions from '../actions/postCommentsAction';

const initialState = {
  comments: [],
  loading: false,
  hasErrors: false,
};

export default function postCommentsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_POST_COMMENTS:
      return { ...state, loading: true };
    case actions.GET_POST_COMMENTS_SUCCESS:
      return { comments: action.payload, loading: false, hasErrors: false };
    case actions.GET_POST_COMMENTS_FAILURE:
      return { ...state, loading: false, hasErrors: true };

    default:
      return state;
  }
}
