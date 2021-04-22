// import {createStore} from "redux";
// import rootReducer from '../reducers'
//
// export default function configureStore(initiaiState) {
//     const store = createStore(rootReducer, initiaiState)
//
//     if (module.hot) {
//         module.hot.accept('../reducers', () => {
//             const nextRootReducer = require('../reducers')
//             store.replaceReducer(nextRootReducer)
//         })
//     }
//
//     return store
// }

import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers'
import thunk from 'redux-thunk'

export default function configureStore() {
    const middleware = [thunk];
    const composeEnhancers =
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

    const enhancer = composeEnhancers(applyMiddleware(...middleware));

    const store = createStore(rootReducer, enhancer);

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers')
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}

