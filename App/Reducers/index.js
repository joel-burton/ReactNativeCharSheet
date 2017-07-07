
import {combineReducers} from 'redux';
import * as loginReducer from 'loginReducer.js';

const reducers = combineReducers(Object.assign({},
    loginReducer,
));


module.exports = reducers;
