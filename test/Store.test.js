import { makeStore } from '../src/Store';
import * as types from '../src/ActionTypes';

test('store is a redux store configured with the correct reducer', () => {
    const store = makeStore();
    expect(store.getState()).toEqual({});

    store.dispatch({
        type: types.ADD_COUNT
    });

    expect(store.getState()).toEqual(
        {count: 1}
    );
});
