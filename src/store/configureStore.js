import {applyMiddleware, compose, createStore} from 'redux';

import DevTools from '../containers/DevTools';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

const enableHotLoader = (store) => {
    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }
};

export default function configureStore() {
    let finalCreateStore = compose(
            applyMiddleware(thunk),
            applyMiddleware(createLogger()),
            DevTools.instrument(),
        )(createStore);

    const store = finalCreateStore(rootReducer, undefined);

    enableHotLoader(store);
    return store;
}




