import { combineReducers } from 'redux';

import postsReducer from './postsReducer';
import postReducer from './postReducer';
import postCommentsReducer from './postCommentsReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  post: postReducer,
  comments: postCommentsReducer,
});

export default rootReducer;
