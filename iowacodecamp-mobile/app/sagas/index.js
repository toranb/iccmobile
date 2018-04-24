import { fork } from 'redux-saga/effects';
import { rebase } from './sessions';
import { rate } from './reviews';

export default function* root() {
  yield [
    fork(rebase),
    fork(rate)
  ];
}
