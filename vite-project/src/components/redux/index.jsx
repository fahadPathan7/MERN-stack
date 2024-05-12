
// state - count (0)
// action - increment, decrement, reset
// reducer - switch case
// store - createStore

import React from 'react';
import { createStore } from 'redux';

// constants
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';
const INCREMENT_BY = 'INCREMENT_BY';

// initial state
const initialState = {
    count: 0
}

// action creators
const incrementAction = () => {
    return {
        type: INCREMENT
    }
}

// action creators
const decrementAction = () => {
    return {
        type: DECREMENT
    }
}

// action creators
const resetAction = () => {
    return {
        type: RESET
    }
}

// action creators
const incrementByAction = (value) => {
    return {
        type: INCREMENT_BY,
        payload: value
    }
}

// reducer. It will take the state and action as an argument
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state, // other state will remain same
                count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        case RESET:
            return {
                ...state,
                count: 0
            }
        case INCREMENT_BY:
            return {
                ...state,
                count: state.count + action.payload
            }
        default:
            return state
    }
}

// store
const store = createStore(counterReducer); // store is used to store the state. without it, we can't store the state

// subscribe is used to get the updated state
store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementAction()); // this is needed to activate the reducer. it will increment the count by 1
store.dispatch(incrementAction()); // it will increment the count by 1. So, the count will be increased by 2
store.dispatch(incrementByAction(5)); // it will increment the count by 5. So, the count will be increased by 7