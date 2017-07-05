import { fork } from 'redux-saga/effects';
import { rebase } from './sessions';

export default function* root() {
  yield [
    fork(rebase)
  ];
}
