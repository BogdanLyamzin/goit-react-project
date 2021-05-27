import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from "redux";

import {fetchAwardsSuccess} from './awards-actions';

const items = createReducer([], {
    [fetchAwardsSuccess]: (_, { payload }) => payload,
})

export default combineReducers({items})