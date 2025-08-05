import { configureStore } from '@reduxjs/toolkit';
import serverReducer, { type ServerState } from './slices/serverSlice';

export const store = configureStore({
  reducer: {
    servers: serverReducer,
  },
});

export type RootState = {
  servers: ServerState;
};

export type AppDispatch = typeof store.dispatch;
