import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import authReducer from './auth/auth-reducer';

const middleware = [
  ...getDefaultMiddleware(),
];

export const store = configureStore({
   reducer: {
    auth: authReducer,
},
   middleware,
   devTools: process.env.NODE_ENV === 'development',
});


