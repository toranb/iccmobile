import createSagaMiddleWare from 'redux-saga';
import root from '../sagas/index';

const sagaMiddleware = createSagaMiddleWare();

const setup = () => {
    sagaMiddleware.run(root);
};

export default {
    middleware: [sagaMiddleware],
    setup: setup
};
