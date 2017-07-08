import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from '../Reducers/Reducers';


const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

// export default function makeStore() {
//     return createStore(reducer);
// }


export function makeStore(initialState) {
    const enhancer = compose(
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware,
        ),
    )
    return createStore(reducer, initialState, enhancer);
}

export const store = makeStore({});
