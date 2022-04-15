import * as actions from '../actions/postAction';

export const initialState = {
  post: {},
  loading: false,
  hasErrors: false,
};

export default function postReducer(state = initialState, action) {
  // console.log('in post reducer');
  // console.log(action.payload);
  // console.log(action.type);
  if (action.type === action.GET_POST_SUCCESS) {
    // console.log('post success');
    // console.log(action.payload);
  }
  switch (action.type) {
    case actions.GET_POST:
      return { post: state, loading: true };
    case actions.GET_POST_SUCCESS:
      return { post: action.payload, loading: false, hasErrors: false };
    case actions.GET_POST_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
}
