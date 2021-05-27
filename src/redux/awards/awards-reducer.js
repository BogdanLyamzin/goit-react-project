import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from "redux";

import {
    fetchAwardsRequest,
    fetchAwardsSuccess,
    fetchAwardsError,
    buyAwardsRequest,
    buyAwardsSuccess,
    buyAwardsError
} from './awards-actions';

const initialStateGetAwards = {
    gifts: [],
    loading: false,
};

const initialStateBuyGifts = [];

const initialStateError = null;

const awardsReducer = createReducer(initialStateGetAwards, {
    [fetchAwardsRequest]: (state) => ({ ...state, loading: true }),
    [fetchAwardsSuccess]: (_, { payload }) => ({ gifts: payload, loading: false }),
    [fetchAwardsError]: (state) => ({ ...state, loading: false }),
});

const buyGiftsReducer = createReducer(initialStateBuyGifts, {
    [buyAwardsRequest]: (state) => ({ ...state, loading: true }),
    [buyAwardsSuccess]: (_, { payload }) => ({ payload, loading: false }),
    [buyAwardsError]: (state) => ({ ...state, loading: false }),
});

const errorReducer = createReducer(initialStateError, {
    [fetchAwardsError]: (_, { payload }) => payload,
    [fetchAwardsSuccess]: () => initialStateError,
    [buyAwardsError]: (_, { payload }) => payload,
    [buyAwardsSuccess]: () => initialStateError,
});

export default combineReducers({
    awards: awardsReducer,
    selectedAwards: buyGiftsReducer,
    error: errorReducer
});