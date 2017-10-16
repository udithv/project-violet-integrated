import { combineReducers } from 'redux';
import FileTreeReducer from './reducer_filetree';

const rootReducer = combineReducers({
  filetree: FileTreeReducer
});

export default rootReducer;
