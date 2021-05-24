import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist';
import authReducer from './auth/auth-reducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

export const store = configureStore({
   reducer: {
    auth: authReducer,
},
   middleware: middleware,
   devTools: process.env.NODE_ENV === 'development',
});


