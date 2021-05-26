import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import authReducer  from './auth/auth-reducer';
import awardsReducer from './awards/awards-reducer';

const middleware = [
  ...getDefaultMiddleware(),
];

export const store = configureStore({
   reducer: {
      auth: authReducer,
      awards: awardsReducer
},
   middleware,
   devTools: process.env.NODE_ENV === 'development',
});


