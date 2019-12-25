import { createStore, applyMiddleware, compose } from 'redux';

import createSagaMiddleware from 'redux-saga';

import rootSaga from './modules/rootSaga';
import rootReducer from './modules/rootReducer';

const sagaMonitor =
    process.env.NODE_ENV === 'development'
        ? console.tron.createSagaMonitor()
        : null;

const sagaMiddleare = createSagaMiddleware({
    sagaMonitor,
});

const enhancer =
    process.env.NODE_ENV === 'development'
        ? compose(console.tron.createEnhancer(), applyMiddleware(sagaMiddleare))
        : applyMiddleware(sagaMiddleare);

const store = createStore(rootReducer, enhancer);

sagaMiddleare.run(rootSaga);

export default store;
