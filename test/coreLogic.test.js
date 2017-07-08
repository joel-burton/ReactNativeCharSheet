import { addCount } from '../src/coreLogic';

test('addCount reducer increases the count', () => {

    const initialState = {display: true, count: 0};
    const nextState = addCount(initialState);

    expect(nextState).toEqual({display: true, count: 1});
});
