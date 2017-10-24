import { combineReducers } from 'redux';
import FileTreeReducer from './reducer_filetree';
import FileDataReducer from './reducer_filedata';
import ChosenFilesReducer from './reducer_chosenfiles';
import FileCacheReducer from './reducer_filecache';

const rootReducer = combineReducers({
  filetree: FileTreeReducer,
  filedata: FileDataReducer,
  chosen: ChosenFilesReducer,
  filecache: FileCacheReducer
});

export default rootReducer;
