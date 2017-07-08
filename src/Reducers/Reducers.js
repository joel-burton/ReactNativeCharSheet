import {
    INITIAL_STATE,
    increment,
    decrement,
    resetCount,
} from './Core.js';
import * as types from '../Actions/ActionTypes';

export default function (state=INITIAL_STATE, action) {
    switch (action.type) {

        case types.INCREMENT:
            return increment(state);

        case types.DECREMENT:
            return decrement(state);

        case types.RESET_COUNT:
            return resetCount(state);
        default:
            return state
    }
}
