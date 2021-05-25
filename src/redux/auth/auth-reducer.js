import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './auth-actions';


const userEmail = createReducer(null, {
    [actions.registerSuccess]: (_, { payload }) => payload.data,
    [actions.loginSuccess]: (_, { payload }) => payload.data,
    [actions.logoutSuccess]: () => null,

});
const token = createReducer(null, {
    [actions.registerSuccess]: (_, { payload }) => payload.token,
    [actions.loginSuccess]: (_, { payload }) => payload.token,
    [actions.logoutSuccess]: () => null,
});
const error = createReducer(null, {
    [actions.registerError]: (_, { payload }) => payload,
    [actions.registerSuccess]: () => null,
    [actions.loginError]: (_, { payload }) => payload,
    [actions.loginSuccess]: () => null,
    [actions.logoutError]: (_, { payload }) => payload,
    [actions.logoutSuccess]: () => null,
});

const authReducer = combineReducers(
    {
        userEmail, token, error
    }
);
export default authReducer;