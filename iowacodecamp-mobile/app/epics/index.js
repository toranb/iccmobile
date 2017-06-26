import { combineEpics } from 'redux-observable';
import { rebase } from './sessions';

export default combineEpics(
  rebase
);
