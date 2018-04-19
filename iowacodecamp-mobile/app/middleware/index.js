import createSagaMiddleWare from 'redux-saga';
import root from '../sagas/index';
import { persistStore } from 'redux-persist';

const sagaMiddleware = createSagaMiddleWare();

const setup = (store) => {
  persistStore(store);
  sagaMiddleware.run(root);
};

export default {
  middleware: [sagaMiddleware],
  setup: setup
};
