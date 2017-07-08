
export const INITIAL_STATE = {}

export function increment(state) {
    var nextState = state
    if (nextState.count === undefined) { nextState.count = 0 }

    return {...nextState, count: state.count + 1}
}

export function decrement(state) {
    var nextState = state
    if (nextState.count === undefined) { nextState.count = 0 }

    return {...nextState, count: state.count - 1}
}

export function resetCount(state) {
    return {...state, count: 0}
}
