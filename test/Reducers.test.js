
import reducer from '../src/Reducers';

test('reducer handles actions and corrctly modifies state', () => {

    const state = {count: 1, display: true}
    const action = {type: 'ADD_COUNT'}
    const invalidAction = {type: 'TOUCH_BUTTS'}

    const nextState = reducer(state, action);


    expect(nextState.count).toEqual(2);
    expect(reducer(state, invalidAction)).toEqual(state);

});

test('reducer has an initial state', () => {

    const action = {type: 'ADD_COUNT'}
    const nextState = reducer(undefined, action);

    expect(nextState).toEqual({count: 1});

});
