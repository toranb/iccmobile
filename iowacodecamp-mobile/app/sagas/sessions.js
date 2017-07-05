import fetch from 'fetch';
import { delay } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';

function* rebaseAsync(action) {
  const fetched = yield call(fetch, '/api/sessions', {method: 'GET'});
  const response = yield call(f => f.json(), fetched);
  yield delay(action.wait || 0);
  yield put({type: 'DESERIALIZE_ALL', response: response});
}

export function* rebase() {
  yield takeEvery('REFRESH_SESSIONS', rebaseAsync);
}
