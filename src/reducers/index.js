import { combineReducers } from 'redux';

import authorReducer from './author';
import bookReducer from './book';
import dataReducer from './data';
import loadReducer from './loading';

const rootReducer = combineReducers({
  data: dataReducer,
  currentBook: bookReducer,
  currentAuthor: authorReducer,
  isLoaded: loadReducer
});

export default rootReducer;
