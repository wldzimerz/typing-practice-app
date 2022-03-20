import { configureStore } from '@reduxjs/toolkit';
import typeStringReducer from './typeStringSlice';
import resultsSliceReducer from './resultsSlice';

export const store = configureStore({
  reducer: {
    typeString: typeStringReducer,
    results: resultsSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export * from './resultsSlice';
export * from './typeStringSlice';