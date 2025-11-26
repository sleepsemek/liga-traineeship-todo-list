import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { loggerMiddleware } from './middleware/loggerMiddleware';
import { tasksMiddleware, tasksReducer, tasksReducerPath } from 'api/client';

export const store = configureStore({
  reducer: {
    [tasksReducerPath]: tasksReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware).concat(tasksMiddleware),
});

setupListeners(store.dispatch);
