import { combineReducers } from 'redux';
import FileTreeReducer from './reducer_filetree';
import FileDataReducer from './reducer_filedata';

const rootReducer = combineReducers({
  filetree: FileTreeReducer,
  filedata: FileDataReducer
});

export default rootReducer;
