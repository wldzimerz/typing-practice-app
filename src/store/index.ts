import { configureStore } from '@reduxjs/toolkit';
import typeStringReducer from './typeStringSlice';

export const store = configureStore({
  reducer: {
    typeString: typeStringReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
