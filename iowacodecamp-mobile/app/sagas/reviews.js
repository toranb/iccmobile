import fetch from 'fetch';
import { run } from '@ember/runloop';
import { uuid } from 'iowacodecamp/utilities/uuid';
import { call, put, takeEvery } from 'redux-saga/effects';

const uniqueId = uuid();

const headers = {
  'Content-Type': 'application/json'
};

function* rateAsync(action) {
  try {
    const id = action.payload.id;
    const rating = action.payload.rating;
    const urlFriendlyId = encodeURIComponent(id);
    const fetched = yield call(fetch, `/api/reviews/${uniqueId}/${urlFriendlyId}`, {method: 'POST', headers: headers, body: JSON.stringify({rating: rating})});
    yield call(f => run(() => f.json()), fetched);
    yield put({type: 'RATE_ITEM', id, rating});
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('failed to push review to the server');
  }
}

export function* rate() {
  yield takeEvery('POST_RATING', rateAsync);
}
