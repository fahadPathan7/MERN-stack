// imports
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
// import default thunk from redux-thunk
import { thunk } from 'redux-thunk';
import axios from 'axios';

// constants
const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST';
const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
const GET_TODOS_FAILURE = 'GET_TODOS_FAILURE';

// states
const initialTodosState = {
    todos: [],
    isLoading: false,
    error: null,
};

// actions
const getTodosRequest = () => {
    return {
        type: GET_TODOS_REQUEST,
    };
};

const getTodosSuccess = (data) => {
    return {
        type: GET_TODOS_SUCCESS,
        payload: data,
    };
};

const getTodosFailure = (error) => {
    return {
        type: GET_TODOS_FAILURE,
        payload: error,
    };
};

// reducer
const todosReducer = (state = initialTodosState, action) => {
    switch (action.type) {
        case GET_TODOS_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case GET_TODOS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                todos: action.payload,
            };
        case GET_TODOS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

// action creator
const getTodos = () => {
    return async (dispatch) => {
        dispatch(getTodosRequest());
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
            dispatch(getTodosSuccess(response.data));
        } catch (error) {
            dispatch(getTodosFailure(error.message));
        }
    };
};

// store
const store = createStore(todosReducer, applyMiddleware(thunk));
store.subscribe(() => {
    console.log(store.getState());
});

// dispatch the action
store.dispatch(getTodos());