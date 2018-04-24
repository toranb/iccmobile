import redux from 'redux';
import createSaga from 'redux-saga';
import { getContext } from '@ember/test-helpers';
import rootSaga from 'iowacodecamp/sagas/index';
import reducers from 'iowacodecamp/reducers/index';
import ReduxService from 'ember-redux/services/redux';

const { createStore, applyMiddleware, compose } = redux;

export function patchReducer(initState) {
  const sagaMiddleware = createSaga();

  const makeStoreInstance = () => {
    const middleware = applyMiddleware(sagaMiddleware);
    const createStoreWithMiddleware = compose(middleware)(createStore);
    const store = createStoreWithMiddleware(reducers, initState);
    sagaMiddleware.run(rootSaga);
    return store;
  };

  const { owner } = getContext();
  owner.register('service:redux', ReduxService.extend({ makeStoreInstance }));
}
