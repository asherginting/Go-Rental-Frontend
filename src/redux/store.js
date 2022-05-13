import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import {persistStore} from 'redux-persist';
import rootReducer from './reducers';

export default () => {
    const store = createStore(rootReducer, applyMiddleware(promise, logger));
    const persistor = persistStore(store);
    return {store, persistor};
};