import { configureStore } from '@reduxjs/toolkit';
import awardsReducer from './awards/awards-reducer';

const store = configureStore({
    reducer: {
    awards: awardsReducer
    }
})

export default store;