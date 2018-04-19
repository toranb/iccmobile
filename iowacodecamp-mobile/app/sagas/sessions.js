import fetch from 'fetch';
import { delay } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';

function* rebaseAsync(action) {
  try {
    const fetched = yield call(fetch, '/api/sessions', {method: 'GET'});
    const response = yield call(f => f.json(), fetched);
    yield delay(action.wait || 0);
    yield put({type: 'DESERIALIZE_ALL', response: response});
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('failed to pull down sessions from the server');
    yield put({type: 'REFRESH_FAILED'});
  }
}

export function* rebase() {
  yield takeEvery('REFRESH_SESSIONS', rebaseAsync);
}
